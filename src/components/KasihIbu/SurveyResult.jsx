/* eslint-disable no-unused-vars */
import React from "react";
import { Activity, Heart, BrainCircuit } from "lucide-react";

const SurveyResults = () => {
  return (
    <div className="mb-16 py-12 px-4">
      <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">
        Survey Results
      </h3>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Comprehensive analysis of maternal well-being during pregnancy and
        postpartum periods
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Pregnant Mothers Card */}
        <div className="bg-white to-white rounded-2xl overflow-hidden">
          <div className="p-6 border-2 border-gray-100 rounded-2xl h-full hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-rose-100 rounded-xl">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                Pregnant Mothers
              </h4>
            </div>

            <div className="space-y-6">
              {/* Key Insight Box */}
              <div className="bg-white p-4 rounded-xl border border-rose-100">
                <p className="text-gray-600 font-medium">
                  Key insights reveal high levels of anxiety, mood swings, and
                  concerns about physical changes during pregnancy.
                </p>
              </div>

              {/* Statistics */}
              <div className="space-y-4">
                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Anxiety about motherhood
                    </span>
                    <span className="text-sm font-bold text-rose-600">
                      57.1%
                    </span>
                  </div>
                  <div className="w-full bg-rose-100 rounded-full h-2">
                    <div
                      className="bg-rose-500 h-2 rounded-full"
                      style={{ width: "57.1%" }}
                    ></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Emotional instability
                    </span>
                    <span className="text-sm font-bold text-rose-600">
                      71.5%
                    </span>
                  </div>
                  <div className="w-full bg-rose-100 rounded-full h-2">
                    <div
                      className="bg-rose-500 h-2 rounded-full"
                      style={{ width: "71.5%" }}
                    ></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Feelings of loneliness
                    </span>
                    <span className="text-sm font-bold text-rose-600">
                      42.8%
                    </span>
                  </div>
                  <div className="w-full bg-rose-100 rounded-full h-2">
                    <div
                      className="bg-rose-500 h-2 rounded-full"
                      style={{ width: "42.8%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Postpartum Mothers Card */}
        <div className="bg-white to-white rounded-2xl overflow-hidden">
          <div className="p-6 border-2 border-gray-100 rounded-2xl h-full hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-rose-100 rounded-xl">
                <BrainCircuit className="w-6 h-6 text-rose-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                Postpartum Mothers
              </h4>
            </div>

            <div className="space-y-6">
              {/* Key Insight Box */}
              <div className="bg-white p-4 rounded-xl border border-rose-100">
                <p className="text-gray-600 font-medium">
                  Findings highlight exhaustion, emotional instability, and
                  difficulty balancing new responsibilities.
                </p>
              </div>

              {/* Statistics */}
              <div className="space-y-4">
                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Fatigue and low energy
                    </span>
                    <span className="text-sm font-bold text-rose-600">
                      88.2%
                    </span>
                  </div>
                  <div className="w-full bg-rose-100 rounded-full h-2">
                    <div
                      className="bg-rose-500 h-2 rounded-full"
                      style={{ width: "88.2%" }}
                    ></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Depression symptoms
                    </span>
                    <span className="text-sm font-bold text-rose-600">
                      41.2%
                    </span>
                  </div>
                  <div className="w-full bg-rose-100 rounded-full h-2">
                    <div
                      className="bg-rose-500 h-2 rounded-full"
                      style={{ width: "41.2%" }}
                    ></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Anger and irritability
                    </span>
                    <span className="text-sm font-bold text-rose-600">
                      47.1%
                    </span>
                  </div>
                  <div className="w-full bg-rose-100 rounded-full h-2">
                    <div
                      className="bg-rose-500 h-2 rounded-full"
                      style={{ width: "47.1%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyResults;
