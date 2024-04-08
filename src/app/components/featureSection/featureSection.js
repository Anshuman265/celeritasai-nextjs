"use client";
import { GlobeAsiaAustraliaIcon, ChartBarIcon, FingerPrintIcon, ChartPieIcon, CpuChipIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI/ML Software Development',
    description: ['Artificial Intelligence','Machine Learning','Deep Learning use cases for various industries throughLLM, Time Series & Computer Vision Models'],
    icon: CpuChipIcon,
  },
  {
    name: 'Marketing Analytics using AI/ML powered technology',
    description: ['Full Funnel Analytics','Data Integration and Automated Dashboard Development','Ceaseless Monitoring and Evaluation'], 
    icon: ChartBarIcon,
  },
  {
    name: 'Data Science and Data Engineering',
    description: ['Data Discovery','Augmented Analytics','Data Intelligence'],
    icon: ChartPieIcon,
  },
  {
    name: 'Strategic Management',
    description: ['Business Model Transformation','Corporate and Sustainable Strategy','Financial Strategy Formulation'],
    icon: GlobeAsiaAustraliaIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-indigo-600">Our Services</h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our vision is to develop and provide smart and efficient automated solutions for the end users
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="list-disc grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                {feature.description.map((item,i) => (
                  <li key={i} className="mt-2 text-base leading-7 text-gray-600">{item}</li>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
