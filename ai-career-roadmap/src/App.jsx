import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    experience: '',
    skills: '',
    targetRole: ''
  })
  const [roadmap, setRoadmap] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const generateRoadmap = () => {
    if (!formData.experience || !formData.skills || !formData.targetRole) {
      alert('Please fill in all fields')
      return
    }

    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const skillsList = formData.skills.split(',').map(skill => skill.trim()).join(', ')
      const fakeResponse = `Roadmap generated for a ${formData.experience}-year ${skillsList} Developer targeting ${formData.targetRole}:
      
• Strengthen data structures and algorithms
• Learn system design basics  
• Explore cloud platforms (AWS, GCP)
• Practice coding interviews and mock sessions
• Build portfolio projects showcasing relevant skills
• Network with professionals in your target role`

      setRoadmap(fakeResponse)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div style={{ minHeight: '100vh', padding: 'var(--space-12) var(--space-4)' }}>
      <div className="container">
        <div className="card card-hover">
          <h1 className="heading-1 text-center text-gradient">
            AI Career Roadmap Generator
          </h1>
          <p className="text-muted text-center">
            Get personalized career guidance powered by AI. Enter your details below to receive a tailored roadmap for your professional growth.
          </p>
          
          <div>
            {/* Years of Experience */}
            <div className="form-group">
              <label htmlFor="experience" className="form-label">
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g., 3"
                min="0"
                max="50"
              />
            </div>

            {/* Skills */}
            <div className="form-group">
              <label htmlFor="skills" className="form-label">
                Skills (comma separated)
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g., Java, Spring Boot, MySQL, Docker"
              />
            </div>

            {/* Target Role */}
            <div className="form-group">
              <label htmlFor="targetRole" className="form-label">
                Target Role
              </label>
              <input
                type="text"
                id="targetRole"
                name="targetRole"
                value={formData.targetRole}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g., Senior Backend Engineer"
              />
            </div>

            {/* Generate Button */}
            <div style={{ paddingTop: 'var(--space-4)' }}>
              <button
                onClick={generateRoadmap}
                disabled={isLoading}
                className="btn btn-primary"
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    Generating Your Roadmap...
                  </>
                ) : (
                  'Generate My Roadmap'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Roadmap Result - Separate centered card */}
        {roadmap && (
          <div className="result-card">
            <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
              <h3 className="heading-2">🚀 Your AI-Generated Roadmap</h3>
              <p className="text-muted" style={{ marginBottom: 0 }}>
                Here's your personalized career development plan
              </p>
            </div>
            <div className="result-content">
              <div className="result-text">
                {roadmap}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
