

import type React from "react"

import { useState } from "react"
import { Loader2, ArrowLeft, ArrowRight, Check, Upload } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Textarea } from "@/Components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group"
import { Checkbox } from "@/Components/ui/checkbox"
import { Separator } from "@/Components/ui/separator"

// Form steps
const steps = [
  "Personal Information",
  "Education & Background",
  "Internship Details",
  "Availability",
  "Supporting Documents",
  "Additional Questions",
  "Review & Submit",
]

// Education levels
const educationLevels = [  "SSCE (Senior Secondary Certificate Examination)",
    "Undergraduate",
    "HND (Higher National Diploma)",
    "Bachelor’s Degree",
    "Postgraduate Diploma",
    "Master’s Degree"]

// Internship roles
const internshipRoles = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Marketing",
  "Finance",
  "Human Resources",
  "Data Science",
  "Product Management",
  "Customer Support",
  "Other",
]

// Internship durations
const internshipDurations = ["3 months", "6 months", "9 months", "12 months"]

// Referral sources
const referralSources = [
  "Company Website",
  "LinkedIn",
  "Job Board",
  "University/College",
  "Social Media",
  "Referral from Friend/Colleague",
  "Career Fair",
  "Other",
]

// Skills list
const skillsList = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "UI/UX Design",
  "Data Analysis",
  "Marketing",
  "Communication",
  "Project Management",
  "Problem Solving",
  "Teamwork",
  "Leadership",
]

export default function InternshipForm() {
  
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",

    // Education & Background
    educationLevel: "",
    fieldOfStudy: "",
    institution: "",
    graduationYear: "",

    // Internship Details
    preferredRole: "",
    hasPriorExperience: "",
    priorExperienceDetails: "",
    skills: [] as string[],

    // Availability
    internshipDuration: "",
    availability: "",

    // Supporting Documents
    resume: null as File | null,
    portfolio: null as File | null,

    // Additional Questions
    whyJoinUs: "",
    referralSource: "",

    // Agreement
    termsAgreed: false,
  })

  

  // Form errors
  const [errors, setErrors] = useState({} as Record<string, string>)

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user selects
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Handle radio changes
  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user selects
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Handle checkbox changes
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    })

    // Clear error when user checks
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Handle skills selection
  const handleSkillToggle = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.includes(skill)
        ? formData.skills.filter((s) => s !== skill)
        : [...formData.skills, skill],
    })

    // Clear error when user selects skills
    if (errors.skills) {
      setErrors({
        ...errors,
        skills: "",
      })
    }
  }

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0] || null
    setFormData({
      ...formData,
      [fieldName]: file,
    })

    // Clear error when user uploads
    if (errors[fieldName]) {
      setErrors({
        ...errors,
        [fieldName]: "",
      })
    }
  }

  // Validate current step
  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    // Validate based on current step
    if (currentStep === 0) {
      // Personal Information validation
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required"
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address"
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required"
      } else if (!/^[0-9+\-\s()]*$/.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number"
      }

      // LinkedIn is optional, but validate format if provided
      if (formData.linkedin && !formData.linkedin.includes("linkedin.com")) {
        newErrors.linkedin = "Please enter a valid LinkedIn URL"
      }
    } else if (currentStep === 1) {
      // Education & Background validation
      if (!formData.educationLevel) {
        newErrors.educationLevel = "Please select your education level"
      }

      if (!formData.fieldOfStudy.trim()) {
        newErrors.fieldOfStudy = "Field of study is required"
      }

      if (!formData.institution.trim()) {
        newErrors.institution = "Institution name is required"
      }

      if (!formData.graduationYear.trim()) {
        newErrors.graduationYear = "Graduation year is required"
      } else if (!/^\d{4}$/.test(formData.graduationYear)) {
        newErrors.graduationYear = "Please enter a valid year (e.g., 2023)"
      }
    } else if (currentStep === 2) {
      // Internship Details validation
      if (!formData.preferredRole) {
        newErrors.preferredRole = "Please select your preferred role"
      }

      if (!formData.hasPriorExperience) {
        newErrors.hasPriorExperience = "Please indicate if you have prior experience"
      }

      if (formData.hasPriorExperience === "Yes" && !formData.priorExperienceDetails.trim()) {
        newErrors.priorExperienceDetails = "Please provide details about your prior experience"
      }

      if (formData.skills.length === 0) {
        newErrors.skills = "Please select at least one skill"
      }
    } else if (currentStep === 3) {
      // Availability validation
      if (!formData.internshipDuration) {
        newErrors.internshipDuration = "Please select your preferred duration"
      }

      if (!formData.availability) {
        newErrors.availability = "Please select your availability"
      }
    } else if (currentStep === 4) {
      // Supporting Documents validation
      if (!formData.resume) {
        newErrors.resume = "Please upload your resume/CV"
      }

      // Portfolio is optional
    } else if (currentStep === 5) {
      // Additional Questions validation
      if (!formData.whyJoinUs.trim()) {
        newErrors.whyJoinUs = "Please tell us why you want to join us"
      } else if (formData.whyJoinUs.length < 50) {
        newErrors.whyJoinUs = "Please provide a more detailed response (at least 50 characters)"
      }

      if (!formData.referralSource) {
        newErrors.referralSource = "Please select how you heard about us"
      }
    } else if (currentStep === 6) {
      // Agreement validation
      if (!formData.termsAgreed) {
        newErrors.termsAgreed = "You must agree to the terms and conditions"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Go to next step
  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  // Go to previous step
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Final validation
    if (!validateStep()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real application, you would send the form data to your backend
      console.log("Form submitted:", formData)

      // Show success message
      
        toast.success("Application Submitted!", {
            description: "Thank you for applying. We will review your application and get back to you soon.",
          })
      

      // Reset form and go back to first step
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        educationLevel: "",
        fieldOfStudy: "",
        institution: "",
        graduationYear: "",
        preferredRole: "",
        hasPriorExperience: "",
        priorExperienceDetails: "",
        skills: [],
        internshipDuration: "",
        availability: "",
        resume: null,
        portfolio: null,
        whyJoinUs: "",
        referralSource: "",
        termsAgreed: false,
      })
      setCurrentStep(0)
    } catch (error) {
   
      toast.error("Submission Failed", {
        description: "There was an error submitting your application. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Render form step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? "border-red-500" : ""}
              />
              {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
              <Input
                id="linkedin"
                name="linkedin"
                placeholder="https://linkedin.com/in/johndoe"
                value={formData.linkedin}
                onChange={handleChange}
                className={errors.linkedin ? "border-red-500" : ""}
              />
              {errors.linkedin && <p className="text-sm text-red-500">{errors.linkedin}</p>}
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="educationLevel">
                Current Level of Education <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.educationLevel}
                onValueChange={(value) => handleSelectChange("educationLevel", value)}
              >
                <SelectTrigger id="educationLevel" className={errors.educationLevel ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your education level" />
                </SelectTrigger>
                <SelectContent>
                  {educationLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.educationLevel && <p className="text-sm text-red-500">{errors.educationLevel}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="fieldOfStudy">
                Field of Study/Major <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fieldOfStudy"
                name="fieldOfStudy"
                placeholder="Computer Science"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                className={errors.fieldOfStudy ? "border-red-500" : ""}
              />
              {errors.fieldOfStudy && <p className="text-sm text-red-500">{errors.fieldOfStudy}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="institution">
                University/Institution Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="institution"
                name="institution"
                placeholder="University of Example"
                value={formData.institution}
                onChange={handleChange}
                className={errors.institution ? "border-red-500" : ""}
              />
              {errors.institution && <p className="text-sm text-red-500">{errors.institution}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="graduationYear">
                Graduation Year <span className="text-red-500">*</span>
              </Label>
              <Input
                id="graduationYear"
                name="graduationYear"
                placeholder="2023"
                value={formData.graduationYear}
                onChange={handleChange}
                className={errors.graduationYear ? "border-red-500" : ""}
              />
              {errors.graduationYear && <p className="text-sm text-red-500">{errors.graduationYear}</p>}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="preferredRole">
                Preferred Internship Role/Department <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.preferredRole}
                onValueChange={(value) => handleSelectChange("preferredRole", value)}
              >
                <SelectTrigger id="preferredRole" className={errors.preferredRole ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your preferred role" />
                </SelectTrigger>
                <SelectContent>
                  {internshipRoles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.preferredRole && <p className="text-sm text-red-500">{errors.preferredRole}</p>}
            </div>

            <div className="space-y-2">
              <Label>
                Do you have prior experience in this field? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.hasPriorExperience}
                onValueChange={(value) => handleRadioChange("hasPriorExperience", value)}
                className={errors.hasPriorExperience ? "border border-red-500 rounded-md p-3" : ""}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Yes" id="experience-yes" />
                  <Label htmlFor="experience-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No" id="experience-no" />
                  <Label htmlFor="experience-no">No</Label>
                </div>
              </RadioGroup>
              {errors.hasPriorExperience && <p className="text-sm text-red-500">{errors.hasPriorExperience}</p>}
            </div>

            {formData.hasPriorExperience === "Yes" && (
              <div className="space-y-2">
                <Label htmlFor="priorExperienceDetails">
                  Please describe your prior experience <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="priorExperienceDetails"
                  name="priorExperienceDetails"
                  placeholder="Describe your experience, including relevant projects, jobs, or volunteer work"
                  value={formData.priorExperienceDetails}
                  onChange={handleChange}
                  className={errors.priorExperienceDetails ? "border-red-500" : ""}
                  rows={4}
                />
                {errors.priorExperienceDetails && (
                  <p className="text-sm text-red-500">{errors.priorExperienceDetails}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label>
                What skills do you bring to the internship? <span className="text-red-500">*</span>
              </Label>
              <div
                className={`grid grid-cols-2 md:grid-cols-3 gap-2 p-3 border rounded-md ${
                  errors.skills ? "border-red-500" : ""
                }`}
              >
                {skillsList.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox
                      id={`skill-${skill}`}
                      checked={formData.skills.includes(skill)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleSkillToggle(skill)
                        } else {
                          handleSkillToggle(skill)
                        }
                      }}
                    />
                    <Label htmlFor={`skill-${skill}`} className="text-sm">
                      {skill}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.skills && <p className="text-sm text-red-500">{errors.skills}</p>}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="internshipDuration">
                Preferred Internship Duration <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.internshipDuration}
                onValueChange={(value) => handleSelectChange("internshipDuration", value)}
              >
                <SelectTrigger id="internshipDuration" className={errors.internshipDuration ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your preferred duration" />
                </SelectTrigger>
                <SelectContent>
                  {internshipDurations.map((duration) => (
                    <SelectItem key={duration} value={duration}>
                      {duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.internshipDuration && <p className="text-sm text-red-500">{errors.internshipDuration}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability">
                Are you available full-time or part-time? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.availability}
                onValueChange={(value) => handleRadioChange("availability", value)}
                className={errors.availability ? "border border-red-500 rounded-md p-3" : ""}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Full-time" id="availability-full" />
                  <Label htmlFor="availability-full">Full-time (40 hours/week)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Part-time" id="availability-part" />
                  <Label htmlFor="availability-part">Part-time (20 hours/week)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Flexible" id="availability-flexible" />
                  <Label htmlFor="availability-flexible">Flexible</Label>
                </div>
              </RadioGroup>
              {errors.availability && <p className="text-sm text-red-500">{errors.availability}</p>}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="resume">
                Upload Resume/CV <span className="text-red-500">*</span>
              </Label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center ${
                  errors.resume ? "border-red-500" : "border-muted"
                }`}
              >
                <Input
                  id="resume"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileUpload(e, "resume")}
                />
                <Label htmlFor="resume" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    {formData.resume ? (
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="font-medium">{formData.resume.name}</span>
                      </div>
                    ) : (
                      <>
                        <span className="font-medium">Click to upload or drag and drop</span>
                        <span className="text-sm text-muted-foreground">PDF, DOC, or DOCX (Max 5MB)</span>
                      </>
                    )}
                  </div>
                </Label>
              </div>
              {errors.resume && <p className="text-sm text-red-500">{errors.resume}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolio">Upload Portfolio (Optional)</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center border-muted">
                <Input
                  id="portfolio"
                  type="file"
                  className="hidden"
                  accept=".pdf,.zip,.doc,.docx"
                  onChange={(e) => handleFileUpload(e, "portfolio")}
                />
                <Label htmlFor="portfolio" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    {formData.portfolio ? (
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="font-medium">{formData.portfolio.name}</span>
                      </div>
                    ) : (
                      <>
                        <span className="font-medium">Click to upload or drag and drop</span>
                        <span className="text-sm text-muted-foreground">PDF, ZIP, DOC, or DOCX (Max 10MB)</span>
                      </>
                    )}
                  </div>
                </Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Alternatively, you can provide a link to your online portfolio:
              </p>
              <Input placeholder="https://myportfolio.com" name="portfolioUrl" onChange={handleChange} />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="whyJoinUs">
                Why do you want to intern with us? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="whyJoinUs"
                name="whyJoinUs"
                placeholder="Tell us why you're interested in this internship and what you hope to gain from the experience"
                value={formData.whyJoinUs}
                onChange={handleChange}
                className={errors.whyJoinUs ? "border-red-500" : ""}
                rows={6}
              />
              {errors.whyJoinUs ? (
                <p className="text-sm text-red-500">{errors.whyJoinUs}</p>
              ) : (
                <p className="text-sm text-muted-foreground">Please write at least 50 characters</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="referralSource">
                How did you hear about this internship? <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.referralSource}
                onValueChange={(value) => handleSelectChange("referralSource", value)}
              >
                <SelectTrigger id="referralSource" className={errors.referralSource ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select how you heard about us" />
                </SelectTrigger>
                <SelectContent>
                  {referralSources.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.referralSource && <p className="text-sm text-red-500">{errors.referralSource}</p>}
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Review Your Application</h3>
              <p className="text-muted-foreground">Please review your information before submitting</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Personal Information</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p className="text-sm text-muted-foreground">Full Name:</p>
                  <p className="text-sm">{formData.fullName}</p>

                  <p className="text-sm text-muted-foreground">Email:</p>
                  <p className="text-sm">{formData.email}</p>

                  <p className="text-sm text-muted-foreground">Phone:</p>
                  <p className="text-sm">{formData.phone}</p>

                  {formData.linkedin && (
                    <>
                      <p className="text-sm text-muted-foreground">LinkedIn:</p>
                      <p className="text-sm">{formData.linkedin}</p>
                    </>
                  )}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium">Education & Background</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p className="text-sm text-muted-foreground">Education Level:</p>
                  <p className="text-sm">{formData.educationLevel}</p>

                  <p className="text-sm text-muted-foreground">Field of Study:</p>
                  <p className="text-sm">{formData.fieldOfStudy}</p>

                  <p className="text-sm text-muted-foreground">Institution:</p>
                  <p className="text-sm">{formData.institution}</p>

                  <p className="text-sm text-muted-foreground">Graduation Year:</p>
                  <p className="text-sm">{formData.graduationYear}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium">Internship Details</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p className="text-sm text-muted-foreground">Preferred Role:</p>
                  <p className="text-sm">{formData.preferredRole}</p>

                  <p className="text-sm text-muted-foreground">Prior Experience:</p>
                  <p className="text-sm">{formData.hasPriorExperience}</p>

                  {formData.hasPriorExperience === "Yes" && (
                    <>
                      <p className="text-sm text-muted-foreground">Experience Details:</p>
                      <p className="text-sm">{formData.priorExperienceDetails}</p>
                    </>
                  )}

                  <p className="text-sm text-muted-foreground">Skills:</p>
                  <p className="text-sm">{formData.skills.join(", ")}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium">Availability</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p className="text-sm text-muted-foreground">Duration:</p>
                  <p className="text-sm">{formData.internshipDuration}</p>

                  <p className="text-sm text-muted-foreground">Availability:</p>
                  <p className="text-sm">{formData.availability}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium">Documents</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p className="text-sm text-muted-foreground">Resume:</p>
                  <p className="text-sm">{formData.resume?.name || "Not uploaded"}</p>

                  <p className="text-sm text-muted-foreground">Portfolio:</p>
                  <p className="text-sm">{formData.portfolio?.name || "Not uploaded"}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="termsAgreed"
                    checked={formData.termsAgreed}
                    onCheckedChange={(checked) => handleCheckboxChange("termsAgreed", checked as boolean)}
                    className={errors.termsAgreed ? "border-red-500" : ""}
                  />
                  <Label htmlFor="termsAgreed" className="text-sm">
                    I agree to the terms and conditions of this internship <span className="text-red-500">*</span>
                  </Label>
                </div>
                {errors.termsAgreed && <p className="text-sm text-red-500">{errors.termsAgreed}</p>}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="container max-w-3xl mx-auto py-10 px-4">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Internship Application</CardTitle>
          <CardDescription>Complete the form below to apply for our internship program</CardDescription>
        </CardHeader>

        {/* Progress indicator */}
        <div className="px-6">
          <div className="flex justify-between mb-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`text-xs font-medium ${
                  currentStep === index ? "text-primary" : currentStep > index ? "text-muted-foreground" : "text-muted"
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <p className="text-sm font-medium mb-4">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
          </p>
        </div>

        <CardContent>
          <form onSubmit={handleSubmit}>{renderStepContent()}</form>
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-6">
          <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

