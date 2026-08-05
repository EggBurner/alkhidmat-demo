import { regionType } from '@/types/region';
import { CourseType } from '../types/course';
import { impactType } from '@/types/impact';
import { EventType } from '@/types/event';
import { campusType } from '@/types/campus';

export const courseData: CourseType[] = [
  { text: 'Data Science', style: 'bg-red-50' },
  { text: 'Graphic Designing', style: 'bg-yellow-50' },
  { text: 'Business Analyst', style: 'bg-orange-50' },
  { text: 'Project Management', style: 'bg-green-50' },
  { text: 'Quality Assurance', style: 'bg-blue-50' },
  { text: 'Web Development', style: 'bg-violet-50' },
];

export const impactData: impactType[] = [
  { heading: '1.M', desc: 'Registered Students' },
  { heading: '157', desc: 'BQ IT Centers' },
  { heading: '98k+', desc: 'Graduated Students' },
  { heading: '61', desc: 'Districts Nationwide' },
];

export const regionData: regionType[] = [
  { region: 'Khyber Pakhtunkhwa', campuses: '79 CAMPUSES' },
  { region: 'Punjab', campuses: '42 CAMPUSES' },
  { region: 'Karachi', campuses: '26 CAMPUSES' },
  { region: 'Islamabad', campuses: '08 CAMPUSES' },
  { region: 'Balochistan', campuses: '07 CAMPUSES' },
  { region: 'Sindh', campuses: 'Coming Soon' },
  { region: 'Azad Kashmir', campuses: 'Coming Soon' },
  { region: 'Gilgit-Baltistan', campuses: 'Coming Soon' },
];

export const userData: UserType[] = [
  { name: 'Haroon Ahmad', avatar: '/user_icon.png' },
  { name: 'Ali Khan', avatar: '/user_icon_2.png' },
  { name: 'Maaz Shafqat', avatar: '/user_icon_3.png' },
  { name: 'Sarah Imtiaz', avatar: '/user_icon_4.png' },
  { name: 'Hassan Zulfiqar', avatar: '/user_icon_5.png' },
  { name: 'Fazl ur Rehman', avatar: '/user_icon_6.png' },
];
export const eventData: EventType[] = [
  {
    step: 1,
    title: 'Apply Online',
    description:
      'Fill out the online application form with your basic information',
  },
  {
    step: 2,
    title: 'Aptitude Test',
    description: 'Complete the online MCQ test to assess your aptitude.',
  },
  {
    step: 3,
    title: 'Interview',
    description: 'Selected candidates proceed to a merit-based interview.',
  },
  {
    step: 4,
    title: 'Enrollment',
    description: '4-month intensive training program with expert instructors.',
  },
  {
    step: 5,
    title: 'Incubation',
    description: 'Work on real projects with mentorship and guidance.',
  },
  {
    step: 6,
    title: 'Internship/Job',
    description: 'Get connected with job opportunities and start your career.',
  },
];

export const campusData: campusType[] = [
  {
    name: 'Test Jamshoro Technical Campus',
    region: 'KP Hazara',
    city: 'Battagran',
    location: 'Near Bannu Adda Road, DI Khan',
    style: 'bg-red-50',
  },
  {
    name: 'Lahore Model Technical Campus',
    region: 'Punjab',
    city: 'Lahore',
    location: 'Near Ferozepur Road, Lahore',
    style: 'bg-blue-50',
  },
  {
    name: 'Karachi Central Technical Campus',
    region: 'Sindh',
    city: 'Karachi',
    location: 'Near University Road, Karachi',
    style: 'bg-green-50',
  },
  {
    name: 'Islamabad Model Technical Campus',
    region: 'Islamabad',
    city: 'Islamabad',
    location: 'Near I-9 Industrial Area, Islamabad',
    style: 'bg-yellow-50',
  },
  {
    name: 'Quetta Technical Campus',
    region: 'Balochistan',
    city: 'Quetta',
    location: 'Near Sariab Road, Quetta',
    style: 'bg-purple-50',
  },
  {
    name: 'Peshawar Technical Campus',
    region: 'KP',
    city: 'Peshawar',
    location: 'Near Ring Road, Peshawar',
    style: 'bg-orange-50',
  },
];
