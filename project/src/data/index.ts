export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}


export const services: ServiceType[] = [
  {
    id: 1,
    title: "Joint Pain Management",
    description: "Personalized treatment for chronic and acute joint pain, including knees, shoulders, and hips.",
    icon: "activity",
    imageUrl: "https://images.unsplash.com/photo-1626524815950-559398d5abea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Sm9pbnQlMjBwYWlufGVufDB8fDB8fHwy"
  },
  {
    id: 2,
    title: "Fracture Treatment",
    description: "Comprehensive care for bone fractures including casting, splinting, and surgical repair when needed.",
    icon: "bone",
    imageUrl: "https://images.unsplash.com/photo-1516069677018-378515003435?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9uZSUyMGZyYWN0dXJlfGVufDB8fDB8fHwy"
  },
  {
    id: 3,
    title: "Arthritis Care",
    description: "Advanced non-surgical and surgical options for managing osteoarthritis and rheumatoid arthritis.",
    icon: "stethoscope",
    imageUrl: "https://media.istockphoto.com/id/1346682277/photo/man-suffering-from-knee-pain-at-home-closeup.webp?a=1&b=1&s=612x612&w=0&k=20&c=OKytBljGHIal00bpKWaJW-bRY1IaavHxUreoV2Kmjd8="
  },
  {
    id: 4,
    title: "Sports Injury Rehab",
    description: "Rehabilitation and therapy for sports-related injuries like ligament tears, sprains, and strains.",
    icon: "heart-pulse",
    imageUrl: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFkbWludG9ufGVufDB8fDB8fHwy"
  },
  {
    id: 5,
    title: "Spine & Back Care",
    description: "Diagnosis and treatment of spinal disorders, including disc problems and lower back pain.",
    icon: "shield",
    imageUrl: "https://images.pexels.com/photos/5723884/pexels-photo-5723884.jpeg"
  },
  {
    id: 6,
    title: "Joint Replacement Consultation",
    description: "Expert evaluation and guidance on total and partial knee, hip, or shoulder replacement surgeries.",
    icon: "plus",
    imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VyZ2VyeXxlbnwwfHwwfHx8Mg%3D%3D"
  }
];

export const stats = [
  { id: 1, value: "98%", label: "Patient Satisfaction" },
  { id: 2, value: "25+", label: "Years of Excellence" },
  { id: 3, value: "10,000+", label: "Patients Treated" },
  { id: 4, value: "800+", label: "Successful Surgeries" }
];