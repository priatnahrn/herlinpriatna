import React from "react";
import {
  History,
  ScrollText,
  MessageSquareText,
  ThumbsUp,
  AlertCircle,
} from "lucide-react";

const IterationResults = () => {
  return (
    <div className="mb-16 py-12 px-4">
      <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">
        Design Iteration Results
      </h3>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Analysis of usability improvements and user feedback across multiple
        iterations
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Iteration Overview Card */}
        <div className="bg-white rounded-2xl overflow-hidden lg:col-span-2">
          <div className="p-6 border-2 border-gray-100 rounded-2xl h-full hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <History className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                First Iteration Changes
              </h4>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Feature 1 */}
                <div className="bg-white p-4 rounded-xl border border-blue-100">
                  <ScrollText className="w-5 h-5 text-blue-600 mb-2" />
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Consultation History
                  </h5>
                  <p className="text-sm text-gray-600">
                    Added consultation history to track previous AI chat
                    interactions and recommendations
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-4 rounded-xl border border-blue-100">
                  <MessageSquareText className="w-5 h-5 text-blue-600 mb-2" />
                  <h5 className="font-semibold text-gray-900 mb-2">
                    To-do Integration
                  </h5>
                  <p className="text-sm text-gray-600">
                    Implemented direct addition of AI recommendations to user's
                    to-do list
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-4 rounded-xl border border-blue-100">
                  <History className="w-5 h-5 text-blue-600 mb-2" />
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Reflection Timeline
                  </h5>
                  <p className="text-sm text-gray-600">
                    Created dated reflection history for easy access to previous
                    entries
                  </p>
                </div>
              </div>

              {/* SUS Score Results */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-4">
                  System Usability Scale (SUS) Results
                </h5>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Average SUS Score
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        83/100
                      </span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "83%" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Grade Scale: B (Good) - Acceptable Usability Level
                  </p>
                </div>
              </div>

              {/* Individual Scores */}
              <div className="space-y-4">
                {[
                  { name: "Kismah Hasanah", score: 80 },
                  { name: "Dina Yuliana", score: 85 },
                  { name: "Suchi Fauziah", score: 82.5 },
                  { name: "Tian N.F", score: 87.5 },
                  { name: "Sarmila", score: 80 },
                ].map((participant, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {participant.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        {participant.score}/100
                      </span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${participant.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* User Feedback Card */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="p-6 border-2 border-gray-100 rounded-2xl h-full hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 rounded-xl">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Key Feedback</h4>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
                <ThumbsUp className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">
                    Add Reflection Overview
                  </h6>
                  <p className="text-sm text-gray-600">
                    Users requested a summary view of their daily reflections
                    for better tracking and insights
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
                <ThumbsUp className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">
                    Enhance Navigation
                  </h6>
                  <p className="text-sm text-gray-600">
                    Improve navigation between different sections for a more
                    seamless experience
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
                <ThumbsUp className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">
                    Simplify Interface
                  </h6>
                  <p className="text-sm text-gray-600">
                    Streamline the interface to reduce complexity and improve
                    user understanding
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

export default IterationResults;
