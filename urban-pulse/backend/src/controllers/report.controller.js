import { db } from "../config/firebase.js";

/**
 * POST /api/reports
 * Create a new incident report
 */
export const createReport = async (req, res) => {
  try {
    const { title, description, latitude, longitude } = req.body;

    // Validation
    if (!title || !description || !latitude || !longitude) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const reportData = {
      title,
      description,
      location: {
        latitude,
        longitude,
      },
      status: "reported",
      createdAt: new Date(),
    };

    // Save to Firestore
    const docRef = await db.collection("reports").add(reportData);

    return res.status(201).json({
      success: true,
      message: "Incident reported successfully",
      data: {
        id: docRef.id,
        ...reportData,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to report incident",
      error: error.message,
    });
  }
};

/**
 * GET /api/reports
 * Fetch all incident reports
 */
export const getReports = async (req, res) => {
  try {
    const snapshot = await db
      .collection("reports")
      .orderBy("createdAt", "desc")
      .get();

    const reports = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({
      success: true,
      count: reports.length,
      data: reports,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch reports",
      error: error.message,
    });
  }
};
