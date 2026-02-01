import admin from "firebase-admin";

// Load service account from ENV (not file)
const serviceAccount = JSON.parse(
  process.env.GOOGLE_SERVICE_ACCOUNT
);

// Initialize Firebase Admin safely
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      ...serviceAccount,
      // Fix newline issue in private key
      private_key: serviceAccount.private_key.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();

export { admin, db };
