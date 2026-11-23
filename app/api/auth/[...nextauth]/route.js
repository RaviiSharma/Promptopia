import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session }) {
      try {
        await connectToDB();
        const sessionUser = await User.findOne({ email: session.user.email });
        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
        }
      } catch (error) {
        console.log("session error:", error);
      }
      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          // "Ravi Kumar Sharma" -> "ravikumarsharma" -> "ravikumar"
          let base = profile.name
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase()
            .slice(0, 12);

          // pad very short names so they pass the 8-char minimum
          if (base.length < 3) base = "user" + base;

          // use the plain name if free, otherwise add a short number
          let username = base;
          while (username.length < 8 || (await User.exists({ username }))) {
            username = base + Math.floor(100 + Math.random() * 900);
          }

          await User.create({
            email: profile.email,
            name: profile.name, // display name, "Ravi Kumar Sharma"
            username,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("signIn error:", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
