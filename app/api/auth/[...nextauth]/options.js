import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        email: { label: "email", type: "email", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        const user = {
          name: "hamza alvi",
          email: "hamza@gmail.com",
          password: "12345",
        };
        console.log(credentials, "credentials");
        return credentials?.email == user.email &&
          credentials?.password == user.password
          ? user
          : null;
      },

      pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
        error: "/auth/error", // Error code passed in query string as ?error=
        verifyRequest: "/auth/verify-request", // (used for check email message)
        newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
      },
      debug: process.env.NODE_ENV !== "production",
      session: {
        strategy: "jwt",
      },
      secret: process.env.NEXTAUTH_SECRET,
    }),
  ],
};
