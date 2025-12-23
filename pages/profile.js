import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Profile() {
  const user = {
    name: "Sai Chandan Gundaboina",
    role: "Full Stack Developer",
    email: "saichandan@example.com",
    github: "https://github.com/saichandan17",
    linkedin: "https://www.linkedin.com/in/saichandanyadav/",
    image: "/developer.jpg"
  }

  return (
    <>
      <Header />
      <section className="profile-page">
        <div className="profile-card">
          <div className="profile-img-box">
            <Image 
              src={user.image} 
              alt={user.name} 
              width={150} 
              height={150} 
              className="profile-img" 
            />
          </div>
          <h2>{user.name}</h2>
          <p className="role">{user.role}</p>
          <p className="email"><a href={`mailto:${user.email}`}>{user.email}</a></p>
          <div className="social-links">
            <a href={user.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}