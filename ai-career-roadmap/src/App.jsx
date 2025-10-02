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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            AI Career Roadmap Generator
          </h1>
          
          <div className="space-y-8">
            {/* Years of Experience */}
            <div className="w-full">
              <label htmlFor="experience" className="block text-base font-medium text-gray-700 mb-3">
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-lg"
                placeholder="e.g., 3"
                min="0"
                max="50"
              />
            </div>

            {/* Skills */}
            <div className="w-full">
              <label htmlFor="skills" className="block text-base font-medium text-gray-700 mb-3">
                Skills (comma separated)
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-lg"
                placeholder="e.g., Java, Spring, MySQL"
              />
            </div>

            {/* Target Role */}
            <div className="w-full">
              <label htmlFor="targetRole" className="block text-base font-medium text-gray-700 mb-3">
                Target Role
              </label>
              <input
                type="text"
                id="targetRole"
                name="targetRole"
                value={formData.targetRole}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-lg"
                placeholder="e.g., Senior Backend Engineer"
              />
            </div>

            {/* Generate Button */}
            <div className="pt-4">
              <button
                onClick={generateRoadmap}
                disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-5 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Generating Roadmap...
                  </div>
                ) : (
                  'Generate Roadmap'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Roadmap Result - Separate centered card */}
        {roadmap && (
          <div className="mt-10 bg-white rounded-2xl shadow-xl p-10 border-t-4 border-indigo-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">🚀 Your AI-Generated Roadmap</h3>
              <p className="text-gray-600">Here's your personalized career development plan</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
              <div className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
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
