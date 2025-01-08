/* eslint-disable no-unused-vars */
import React from "react";
import { CloudLightning, GitBranch, Target, Vote, List } from "lucide-react";

const IdeationProcess = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Ideation Process
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From brainstorming to final feature selection for the Kasih Ibu
            application
          </p>
        </div>

        {/* Ideation Steps */}
        <div className="space-y-12">
          {/* Brainstorming Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 rounded-xl">
                <CloudLightning className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Brainstorming
                </h4>
                <p className="text-gray-600">
                  Initial ideation based on HMW questions
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">Mental Health Support</h5>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI-powered mood tracking</li>
                  <li>• Virtual counseling</li>
                  <li>• Emotional diary</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">Community Features</h5>
                <ul className="space-y-2 text-gray-600">
                  <li>• Support groups</li>
                  <li>• Experience sharing</li>
                  <li>• Expert Q&A</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">Emergency Services</h5>
                <ul className="space-y-2 text-gray-600">
                  <li>• Quick access to help</li>
                  <li>• Location-based support</li>
                  <li>• Emergency contacts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature Prioritization */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Feature Prioritization
                </h4>
                <p className="text-gray-600">
                  Based on user value and implementation effort
                </p>
              </div>
            </div>

            <div className="relative p-4 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-2">
                    High Value, Low Effort
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI Mood Detection</li>
                    <li>• Community Support</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">
                    High Value, High Effort
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI Counseling</li>
                    <li>• Emergency Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Final Features */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <List className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Selected Features
                </h4>
                <p className="text-gray-600">
                  Final features for implementation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h5 className="text-lg font-semibold text-purple-700 mb-3">
                  Refleksi
                </h5>
                <p className="text-gray-600">
                  AI-powered emotional tracking and analysis for understanding
                  mood patterns and changes during pregnancy and postpartum
                  periods.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h5 className="text-lg font-semibold text-purple-700 mb-3">
                  Kirana AI
                </h5>
                <p className="text-gray-600">
                  AI-based consultation through video and chat for preventive
                  psychological support and emotional well-being management.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h5 className="text-lg font-semibold text-purple-700 mb-3">
                  Dukungan Komunitas
                </h5>
                <p className="text-gray-600">
                  Community platform for sharing experiences, asking questions,
                  and receiving emotional support from other mothers.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h5 className="text-lg font-semibold text-purple-700 mb-3">
                  Layanan Darurat
                </h5>
                <p className="text-gray-600">
                  Emergency services with location-based hospital access and
                  emergency contact integration for critical situations.
                </p>
              </div>
            </div>
          </div>

          {/* User Flow Preview */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <GitBranch className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  User Flow Overview
                </h4>
                <p className="text-gray-600">Key application workflows</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h6 className="font-semibold mb-2">
                  Registration & Pre-Assessment
                </h6>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>Sign Up</span>
                  <span>→</span>
                  <span>Profile Setup</span>
                  <span>→</span>
                  <span>Initial Assessment</span>
                </div>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg">
                <h6 className="font-semibold mb-2">Reflection Flow</h6>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>Mood Input</span>
                  <span>→</span>
                  <span>AI Analysis</span>
                  <span>→</span>
                  <span>Recommendations</span>
                </div>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg">
                <h6 className="font-semibold mb-2">Emergency Flow</h6>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>Alert Trigger</span>
                  <span>→</span>
                  <span>Location Detection</span>
                  <span>→</span>
                  <span>Emergency Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeationProcess;
