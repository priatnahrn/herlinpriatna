/* eslint-disable no-unused-vars */
import React from "react";
import {
  Users,
  UserRound,
  Stethoscope,
  Brain,
  Target,
  Hospital,
} from "lucide-react";

const InterviewResults = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            In-depth Interview Results
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive findings from interviews with pregnant mothers,
            postpartum mothers, and healthcare professionals conducted between
            March 4-11, 2024
          </p>
        </div>

        {/* Interview Groups */}
        <div className="space-y-8">
          {/* Pregnant Mothers Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <UserRound className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Pregnant Mothers
                  </h4>
                  <p className="text-gray-500">
                    3 participants, aged 21-28 years
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-5">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Healthcare Programs
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p>
                        Prefer independent routine check-ups over specific
                        programs
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p>Limited access to healthcare and high costs</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p>Lack of emotional and psychological support</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-5">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Psychological Condition
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p>Mixed feelings of happiness and anxiety</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p>Sleep disruption and insufficient rest</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p>Difficulty finding psychological health resources</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-5">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Expectations
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p>Better access to healthcare services</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p>Improved psychological consultation services</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p>Easier mental health management guidance</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Postpartum Mothers Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Postpartum Mothers
                  </h4>
                  <p className="text-gray-500">
                    2 participants, aged 24-35 years
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Healthcare Programs
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p>No specific postpartum health programs</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p>Routine check-ups based on needs</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p>Significant physical and emotional changes</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-5">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Psychological Health
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p>Anxiety and fear about new responsibilities</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p>Limited family support and feeling overwhelmed</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p>Lack of proper psychological management info</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-5">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Expectations
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p>Specialized postpartum consultation programs</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p>Better emotional management resources</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p>Improved psychological support systems</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare Professionals Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Healthcare Professionals
                  </h4>
                  <p className="text-gray-500">
                    2 participants - Community Health & Nursing specialists
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-5">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Key Psychological Factors
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Excessive anxiety about childbirth</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Fear of inadequate parenting abilities</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Body image concerns post-delivery</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-5">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Current Programs
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Antenatal Care (ANC) programs</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Medical observation and education</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Basic pregnancy health management</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-5">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Recommendations
                  </h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Yoga and physical activities</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Strong support system development</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Proper nutrition and health education</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewResults;
