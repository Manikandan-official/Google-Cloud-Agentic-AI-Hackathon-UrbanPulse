# Urban Pulse
### AI-Powered City Intelligence Platform

[![Google Cloud](https://img.shields.io/badge/Google%20Cloud-Agentic%20AI-blue)](https://cloud.google.com/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/Frontend-React-blue)](https://react.dev/)
[![Security](https://img.shields.io/badge/Security-Env%20Based-success)](#security-best-practices)

---

## Overview

**Urban Pulse** is an intelligent, agentic AI-powered city intelligence platform that transforms real-time, multimodal urban data into predictive insights, live geospatial intelligence, and actionable alerts.

Built with cloud-native architecture and autonomous AI agents, Urban Pulse enables **smart cities, governments, and enterprises** to monitor urban environments proactively and make data-driven decisions at scale.

---

## Problem Statement

Modern cities generate enormous volumes of real-time data across:

- Traffic and mobility
- Public safety
- Infrastructure monitoring
- Environmental sensing
- Citizen-reported incidents

However, this data is often fragmented, reactive, and difficult to visualize in real time. Decision-makers lack a unified, intelligent system that can **analyze, predict, and act** on urban data continuously.

---

## Solution & Key Features

Urban Pulse introduces an **agentic AI architecture** that continuously perceives, reasons, and responds to city-scale data streams.

### Key Features

- **Real-Time Map Visualization**  
  Live Google Maps–based dashboard with geo-tagged incidents and events.

- **Agentic AI Insights**  
  Autonomous AI agents analyze patterns, trends, and anomalies in real time.

- **Predictive Alerts & Notifications**  
  Early warnings for traffic congestion, safety risks, and infrastructure issues.

- **Multimodal Data Processing**  
  Supports structured and unstructured inputs including reports and locations.

- **Secure Backend Architecture**  
  Cloud-native backend using environment-based secrets and Firebase Admin SDK.

---

## Architecture Overview

Urban Pulse follows a modular, cloud-native architecture:

- **Frontend Layer**  
  React application with Google Maps integration for visualization.

- **Backend API Layer**  
  Node.js and Express REST APIs for data ingestion and retrieval.

- **AI Intelligence Layer**  
  Agent-based logic for inference, alerting, and contextual insights.

- **Data Layer**  
  Firebase Firestore for scalable, real-time NoSQL storage.

- **Security Layer**  
  Environment-variable–based authentication and access control.

---

## Tech Stack

### Frontend
- React
- Google Maps API
- CSS

### Backend
- Node.js
- Express.js
- Firebase Admin SDK

### Database
- Firebase Firestore

### Cloud Platform
- Google Cloud Platform
- Firebase

---

## Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- Google Cloud account
- Firebase project
- Git

---

## ▶️ Backend Setup

Navigate to the backend directory:

```bash
cd backend
npm install
```
### 🎨 Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
npm start

```

## 🔐 Security Best Practices

Urban Pulse follows enterprise-grade security standards:

- No credentials or secrets stored in source control  
- Environment-based configuration using `.env` files  
- Secure Firebase Admin initialization  
- `.env` files excluded via `.gitignore`  
- Cloud-native, security-first design principles  
- Fully compliant with organizational and hackathon security policies

## 📁 Project Structure

```text
urban-pulse/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md

````

## 🏙️ Use Cases

- Smart city command and control centers  
- Traffic and mobility intelligence systems  
- Public safety monitoring and alerting  
- Infrastructure health and anomaly tracking  
- Enterprise-grade urban analytics platforms  

---

## 🏆 Hackathon / Organization Context

Urban Pulse was developed as part of the **Google Cloud Agentic AI Hackathon**.

The project demonstrates:

- Agentic AI system design  
- Cloud-native architecture  
- Secure backend engineering  
- Real-time geospatial intelligence  

Urban Pulse showcases how autonomous AI agents can transform city-scale data into proactive, predictive intelligence systems.

---










