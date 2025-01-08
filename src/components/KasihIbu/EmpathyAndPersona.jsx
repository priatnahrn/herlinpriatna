/* eslint-disable no-unused-vars */
import React from "react";
import {
  Brain,
  Heart,
  Eye,
  Ear,
  MessageCircle,
  Target,
  User,
} from "lucide-react";

const EmpathyAndPersona = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Empathy Map Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Empathy Map
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding our users thoughts, feelings, and experiences during
              pregnancy and postpartum periods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Think & Feel */}
            <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-rose-100 rounded-lg">
                  <Brain className="w-5 h-5 text-rose-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Think & Feel</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
                  <p>Anxiety about becoming a mother</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
                  <p>Worry about physical changes</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
                  <p>Mixed emotions of joy and fear</p>
                </li>
              </ul>
            </div>

            {/* See */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">See</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p>Limited healthcare resources</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p>Other mothers experiences</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p>Information from social media</p>
                </li>
              </ul>
            </div>

            {/* Say & Do */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Say & Do</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p>Seek support from family</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p>Research online for information</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p>Attend regular check-ups</p>
                </li>
              </ul>
            </div>

            {/* Hear */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Ear className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Hear</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p>Advice from healthcare providers</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p>Family recommendations</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p>Other mothers experiences</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Persona Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              User Personas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based on insights from the empathy map, detailed user personas
              were developed to represent typical pregnant and postpartum
              mothers. These personas guide design decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pregnant Mother Persona */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                <h4 className="text-white text-xl font-semibold">
                  Pregnant Mother
                </h4>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Sarah, 26</h5>
                    <p className="text-gray-600">
                      First-time mother, 6 months pregnant
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">
                      Background
                    </h6>
                    <p className="text-gray-600">
                      Working professional adjusting to pregnancy while managing
                      career responsibilities
                    </p>
                  </div>

                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">Goals</h6>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <p>Find reliable pregnancy information</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <p>Manage anxiety about childbirth</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <p>Balance work and pregnancy needs</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">
                      Pain Points
                    </h6>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <p>Limited access to mental health support</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <p>Difficulty finding credible information</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <p>Sleep and mood issues</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Postpartum Mother Persona */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4">
                <h4 className="text-white text-xl font-semibold">
                  Postpartum Mother
                </h4>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Nina, 29</h5>
                    <p className="text-gray-600">
                      New mother, 2 months postpartum
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">
                      Background
                    </h6>
                    <p className="text-gray-600">
                      Stay-at-home mom adjusting to new responsibilities and
                      lifestyle changes
                    </p>
                  </div>

                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">Goals</h6>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <p>Establish healthy routines</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <p>Connect with other new mothers</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <p>Manage emotional well-being</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">
                      Pain Points
                    </h6>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <p>Feeling overwhelmed with new responsibilities</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <p>Lack of sleep and self-care time</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <p>Limited emotional support system</p>
                      </li>
                    </ul>
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

export default EmpathyAndPersona;
