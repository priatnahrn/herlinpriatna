/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { QrCode, TestTube, ClipboardCheck, BarChart3 } from "lucide-react";

const PrototypeAndTesting = () => {
  const susScoreData = [
    { name: "Kismah Hasanah", score: 82.5 },
    { name: "Dina Yuliana", score: 70 },
    { name: "Suchi Fauziah", score: 85 },
    { name: "Tian N.F", score: 82.5 },
    { name: "Sarmila", score: 50 },
  ];

  const testTasks = [
    {
      task: "Registration",
      scenario:
        "You are opening the Kasih Ibu app for the first time. Show how to complete the registration process.",
    },
    {
      task: "Login",
      scenario:
        "You have already registered in the Kasih Ibu app and have an account. Show how to log in to the application.",
    },
    {
      task: "Pre-Assessment",
      scenario:
        "As a new user, you need to complete a pre-assessment before accessing other features. Show how to take the pre-assessment test.",
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Prototype Section */}
        {/* <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <QrCode className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">Prototype</h4>
              <p className="text-gray-600">
                Scan to try the interactive prototype
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-emerald-50 p-8 rounded-xl flex flex-col items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                
                <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">QR Code</span>
                </div>
              </div>
              <p className="text-center text-gray-600">
                Scan QR code or visit:
                <br />
                <a href="#" className="text-emerald-600 font-medium">
                  prototype.kasihibu.com/demo
                </a>
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-semibold text-lg">Prototype Features:</h5>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-emerald-500" />
                  Interactive UI Elements
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-emerald-500" />
                  Complete User Flows
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-emerald-500" />
                  Realistic Interactions
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* Testing Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-violet-100 rounded-xl">
              <TestTube className="w-6 h-6 text-violet-600" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">
                Usability Testing
              </h4>
              <p className="text-gray-600">
                System Usability Scale (SUS) Results
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* SUS Score Overview */}
            <div className="bg-violet-50 p-6 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-700 mb-2">
                  74
                </div>
                <p className="text-gray-600">Average SUS Score</p>
                <div className="mt-2 inline-block px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
                  Grade C - Good
                </div>
              </div>
            </div>

            {/* Individual Scores */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {susScoreData.map((participant, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{participant.name}</span>
                    <span className="text-violet-600 font-semibold">
                      {participant.score}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-violet-500 rounded-full h-2"
                      style={{ width: `${participant.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Test Tasks */}
            <div className="space-y-4">
              <h5 className="font-semibold text-lg mb-4">Test Scenarios</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testTasks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-gray-200"
                  >
                    <h6 className="font-semibold text-violet-700 mb-2">
                      {item.task}
                    </h6>
                    <p className="text-gray-600 text-sm">{item.scenario}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback Summary */}
            <div className="bg-violet-50 p-6 rounded-xl">
              <h5 className="font-semibold text-lg mb-4">Key Findings</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-violet-600" />
                    <span className="font-medium">Usability Score</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Testing results fall into the Good category with a grade
                    scale C, indicating the application is usable but requires
                    some improvements.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-violet-600" />
                    <span className="font-medium">Areas for Improvement</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Focus improvements on tasks 3, 4, 5, and 7 based on
                    participant feedback to enhance the overall user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypeAndTesting;
