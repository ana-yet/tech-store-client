import clientPromise from "@/app/lib/mongodb";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // runs after successful login
    async signIn({ user }) {
      try {
        const client = await clientPromise;
        const db = client.db("TechStore");

        // Check if user already exists
        const existingUser = await db
          .collection("users")
          .findOne({ email: user.email });
        if (!existingUser) {
          // Insert new user into MongoDB
          await db.collection("users").insertOne({
            name: user?.name || "No Name",
            email: user.email || "No Email",
            image: user.image || "No Image",
            createdAt: new Date(),
          });
        }

        return true; // allow login
      } catch (err) {
        console.error("Error storing user:", err);
        return false; // block login if error occurs
      }
    },

    // redirect after login
    async redirect({ url, baseUrl }) {
      return "/dashboard";
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
