import { useAuth } from '../context/AuthContext';

const healthcareStats = [
  {
    name: 'Total Patients',
    value: '3,842',
    change: '+5.2%',
    changeLabel: 'vs last month',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Appointments Today',
    value: '28',
    change: '+12.1%',
    changeLabel: 'vs yesterday',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: 'Active Prescriptions',
    value: '1,205',
    change: '+3.8%',
    changeLabel: 'this week',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    name: 'Lab Reports Pending',
    value: '47',
    change: '-8.3%',
    changeLabel: 'vs last week',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

const serviceCards = [
  {
    title: 'Patient Records',
    description:
      'View and manage comprehensive patient health records, medical history, and treatment plans.',
    color: 'border-blue-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    badge: '3,842 records',
    badgeColor: 'bg-blue-100 text-blue-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Appointments',
    description:
      'Schedule, reschedule, and manage patient appointments with real-time calendar sync.',
    color: 'border-emerald-500',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    badge: '28 today',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Telemedicine',
    description:
      'Conduct virtual consultations with patients via secure video and messaging platform.',
    color: 'border-cyan-500',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    badge: '5 scheduled',
    badgeColor: 'bg-cyan-100 text-cyan-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Pharmacy & Prescriptions',
    description:
      'Manage prescriptions, track medication inventory, and send refill reminders to patients.',
    color: 'border-violet-500',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600',
    badge: '1,205 active',
    badgeColor: 'bg-violet-100 text-violet-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: 'Lab Results',
    description:
      'Access and review laboratory test results, imaging reports, and diagnostic summaries.',
    color: 'border-amber-500',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    badge: '47 pending',
    badgeColor: 'bg-amber-100 text-amber-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Billing & Insurance',
    description:
      'Process claims, verify insurance coverage, and manage patient billing and payments.',
    color: 'border-rose-500',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
    badge: '12 claims',
    badgeColor: 'bg-rose-100 text-rose-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const recentActivity = [
  {
    patient: 'Sarah Johnson',
    action: 'Lab results received',
    time: '10 min ago',
    status: 'completed',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    patient: 'Michael Chen',
    action: 'Prescription renewed',
    time: '25 min ago',
    status: 'completed',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    patient: 'Emily Rodriguez',
    action: 'Appointment scheduled',
    time: '1 hour ago',
    status: 'upcoming',
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    patient: 'David Kim',
    action: 'Telemedicine session',
    time: '2 hours ago',
    status: 'in progress',
    statusColor: 'bg-amber-100 text-amber-700',
  },
  {
    patient: 'Lisa Thompson',
    action: 'Insurance claim submitted',
    time: '3 hours ago',
    status: 'pending',
    statusColor: 'bg-gray-100 text-gray-700',
  },
];

const upcomingAppointments = [
  {
    patient: 'Robert Williams',
    type: 'General Checkup',
    time: '9:00 AM',
    doctor: 'Dr. Adams',
    avatarColor: 'bg-blue-500',
  },
  {
    patient: 'Maria Garcia',
    type: 'Follow-up Visit',
    time: '10:30 AM',
    doctor: 'Dr. Patel',
    avatarColor: 'bg-emerald-500',
  },
  {
    patient: 'James Wilson',
    type: 'Lab Review',
    time: '11:15 AM',
    doctor: 'Dr. Lee',
    avatarColor: 'bg-violet-500',
  },
  {
    patient: 'Anna Brown',
    type: 'Telemedicine',
    time: '2:00 PM',
    doctor: 'Dr. Adams',
    avatarColor: 'bg-rose-500',
  },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Healthcare Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back, {user?.firstName} {user?.lastName}! Here&apos;s your
          healthcare overview for today.
        </p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {healthcareStats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className={`p-2.5 rounded-lg ${stat.bgColor}`}>
                <span className={stat.color}>{stat.icon}</span>
              </div>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  stat.change.startsWith('+')
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-gray-400">{stat.changeLabel}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Healthcare Services Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Healthcare Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className={`bg-white rounded-xl shadow-sm border-l-4 ${card.color} border border-gray-200 p-5 hover:shadow-md transition-all cursor-pointer group`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`p-3 rounded-xl ${card.bgColor} group-hover:scale-105 transition-transform`}
                >
                  <span className={card.iconColor}>{card.icon}</span>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900 group-hover:text-gray-700">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">
                <span>Open</span>
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Recent Activity + Upcoming Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Patient Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Patient Activity
            </h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600">
                      {item.patient
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.patient}
                    </p>
                    <p className="text-xs text-gray-500">{item.action}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Upcoming Appointments
            </h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              Schedule new
            </button>
          </div>
          <div className="space-y-4">
            {upcomingAppointments.map((appt, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full ${appt.avatarColor} flex items-center justify-center`}
                  >
                    <span className="text-sm font-semibold text-white">
                      {appt.patient
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {appt.patient}
                    </p>
                    <p className="text-xs text-gray-500">
                      {appt.type} &middot; {appt.doctor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    {appt.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
