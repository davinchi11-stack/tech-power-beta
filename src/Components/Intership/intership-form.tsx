/* eslint-disable @typescript-eslint/no-explicit-any */


import type React from "react"

import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Loader2, ArrowLeft, ArrowRight, Check, Upload } from "lucide-react"
// import { toast } from "sonner"

import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Textarea } from "@/Components/ui/textarea"
import { RadioGroupItem , RadioGroup} from "@/Components/ui/radio-group"
import { Checkbox } from "@/Components/ui/checkbox"
import { Separator } from "@/Components/ui/separator"
import { FormField } from "@/Components/ui/form"
import { CheckedState } from "@radix-ui/react-checkbox"
import { useInternshipMutate } from "@/Hooks/useIntership"


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
  "Master’s Degree"
]

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

// Define validation schemas for each step
const personalInfoSchema = yup.object({
  fullName: yup.string().required("Full name is required").min(2, "Full name must be at least 2 characters"),
  email: yup.string().required("Email is required").email("Please enter a valid email address"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]*$/, "Please enter a valid phone number"),
  linkedin: yup.string().url("Please enter a valid URL").notRequired(),
})

const educationSchema = yup.object({
  educationLevel: yup.string().required("Please select your education level"),
  fieldOfStudy: yup.string().required("Field of study is required"),
  institution: yup.string().required("Institution name is required"),
  graduationYear: yup
    .string()
    .required("Graduation year is required")
    .matches(/^\d{4}$/, "Please enter a valid year (e.g., 2023)"),
})

const internshipDetailsSchema = yup.object({
  preferredRole: yup.string().required("Please select your preferred role"),
  hasPriorExperience: yup.string().required("Please indicate if you have prior experience"),
  priorExperienceDetails: yup.string().when("hasPriorExperience", {
    is: "Yes",
    then: (schema) => schema.required("Please provide details about your prior experience"),
    otherwise: (schema) => schema.notRequired(),
  }),
  skills: yup.array().min(1, "Please select at least one skill").required("Please select at least one skill"),
})

const availabilitySchema = yup.object({
  internshipDuration: yup.string().required("Please select your preferred duration"),
  availability: yup.string().required("Please select your availability"),
})

const documentsSchema = yup.object({
  resume: yup.mixed().required("Please upload your resume/CV"),
  portfolio: yup.mixed().notRequired(),
  portfolioUrl: yup.string().url("Please enter a valid URL").notRequired(),
})

const additionalQuestionsSchema = yup.object({
  whyJoinUs: yup
    .string()
    .required("Please tell us why you want to join us")
    .min(50, "Please provide a more detailed response (at least 50 characters)"),
  referralSource: yup.string().required("Please select how you heard about us"),
})

const agreementSchema = yup.object({
  termsAgreed: yup
    .boolean()
    .required("You must agree to the terms and conditions")
    .oneOf([true], "You must agree to the terms and conditions"),
})

// Combine all schemas
const formSchema = yup.object({
  ...personalInfoSchema.fields,
  ...educationSchema.fields,
  ...internshipDetailsSchema.fields,
  ...availabilitySchema.fields,
  ...documentsSchema.fields,
  ...additionalQuestionsSchema.fields,
  ...agreementSchema.fields,
})

// Define the form data type
type FormData = yup.InferType<typeof formSchema>

export default function InternshipForm() {

  

  const [currentStep, setCurrentStep] = useState(0)
  
  
  const formRef = useRef<HTMLDivElement | null>(null);


  // Get the schema for the current step
  const getCurrentSchema = () => {
    switch (currentStep) {
      case 0:
        return personalInfoSchema
      case 1:
        return educationSchema
      case 2:
        return internshipDetailsSchema
      case 3:
        return availabilitySchema
      case 4:
        return documentsSchema
      case 5:
        return additionalQuestionsSchema
      case 6:
        return agreementSchema
      default:
        return personalInfoSchema
    }
  }

  // Initialize form with React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
    reset,
    control,
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
    defaultValues: {
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
      skills: [], // Provide an empty array as the default value
      internshipDuration: "",
      availability: "",
      resume: undefined,
      portfolio: undefined,
      portfolioUrl: "",
      whyJoinUs: "",
      referralSource: "",
      termsAgreed: false,
    },
  })

  // Watch for values that affect conditional fields
  const hasPriorExperience = watch("hasPriorExperience") as any

  const {mutation} = useInternshipMutate(reset , setCurrentStep)

  // Go to next step
  const handleNext = async () => {
    // Validate current step fields
    const currentSchema = getCurrentSchema()
    const fieldsToValidate = Object.keys(currentSchema.fields)

    const isValid = await trigger(fieldsToValidate as any)

    if (isValid) {
      setCurrentStep((prev) => prev + 1)
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Go to previous step
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1)
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    mutation.mutate(data)

    
      
  //  console.log(data);
   
  }

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: "resume" | "portfolio") => {
    const file = e.target.files?.[0] || null
    if (file) {
      setValue(fieldName, file as any)
    }
  }

  // Handle checkbox change for skills
  const handleSkillChange = (skill: string, checked: boolean) => {
    const currentSkills = (watch("skills") as string[]) || [];

    if (checked) {
      setValue("skills", [...currentSkills, skill] ) 
    } else {
      setValue(
        "skills",
        currentSkills.filter((s) => s !== skill),
      )
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
                placeholder="John Doe"
                {...register("fullName")}
                className={errors.fullName ? "border-red-500" : ""}
              />
              {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                placeholder="+234 9044 1237"
                {...register("phone")}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
              <Input
                id="linkedin"
                placeholder="https://linkedin.com/in/johndoe"
                {...register("linkedin")}
                className={errors.linkedin ? "border-red-500" : ""}
              />
              {errors.linkedin && <p className="text-sm text-red-500">{errors.linkedin.message}</p>}
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
              <FormField
                control={control}
                name="educationLevel"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value as string | undefined}>
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
                )}
              />
              {errors.educationLevel && <p className="text-sm text-red-500">{errors.educationLevel.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="fieldOfStudy">
                Field of Study/Major <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fieldOfStudy"
                placeholder="Computer Science"
                {...register("fieldOfStudy")}
                className={errors.fieldOfStudy ? "border-red-500" : ""}
              />
              {errors.fieldOfStudy && <p className="text-sm text-red-500">{errors.fieldOfStudy.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="institution">
                University/Institution Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="institution"
                placeholder="University of Example"
                {...register("institution")}
                className={errors.institution ? "border-red-500" : ""}
              />
              {errors.institution && <p className="text-sm text-red-500">{errors.institution.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="graduationYear">
                Graduation Year <span className="text-red-500">*</span>
              </Label>
              <Input
                id="graduationYear"
                placeholder="2023"
                {...register("graduationYear")}
                className={errors.graduationYear ? "border-red-500" : ""}
              />
              {errors.graduationYear && <p className="text-sm text-red-500">{errors.graduationYear.message}</p>}
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
              <FormField
                control={control}
                name="preferredRole"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value as string | undefined}>
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
                )}
              />
              {errors.preferredRole && <p className="text-sm text-red-500">{errors.preferredRole.message}</p>}
            </div>

            <div className="space-y-2">
              <Label>
                Do you have prior experience in this field? <span className="text-red-500">*</span>
              </Label>      
              <RadioGroup
                value={watch("hasPriorExperience") as string} // Sync with React Hook Form
                onValueChange={(value) => setValue("hasPriorExperience", value)} // Update form state
              >
                <div className={`space-y-2 ${errors.hasPriorExperience ? "border border-red-500 rounded-md p-3" : ""}`}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" id="experience-yes" />
                    <Label htmlFor="experience-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="experience-no" />
                    <Label htmlFor="experience-no">No</Label>
                  </div>
                </div>
           </RadioGroup>

              {errors.hasPriorExperience && <p className="text-sm text-red-500">{errors.hasPriorExperience.message}</p>}
            </div>

            {hasPriorExperience === "Yes" && (
              <div className="space-y-2">
                <Label htmlFor="priorExperienceDetails">
                  Please describe your prior experience <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="priorExperienceDetails"
                  placeholder="Describe your experience, including relevant projects, jobs, or volunteer work"
                  className={`min-h-[120px] ${errors.priorExperienceDetails ? "border-red-500" : ""}`}
                  {...register("priorExperienceDetails")}
                />
                {errors.priorExperienceDetails && (
                  <p className="text-sm text-red-500">{errors.priorExperienceDetails.message}</p>
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
                    <input
                      type="checkbox"
                      id={`skill-${skill}`}
                      value={skill}
                      className="hidden"
                      {...register("skills")}
                    />
                    <Checkbox
                      id={`skill-${skill}-visual`}
                      checked={Array.isArray(watch("skills")) && (watch("skills") as string[]).includes(skill)}
                      onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                    />
                    <Label htmlFor={`skill-${skill}-visual`} className="text-sm">
                      {skill}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.skills && <p className="text-sm text-red-500">{errors.skills.message}</p>}
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
              <FormField
                control={control}
                name="internshipDuration"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value as string | undefined}>
                    <SelectTrigger
                      id="internshipDuration"
                      className={errors.internshipDuration ? "border-red-500" : ""}
                    >
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
                )}
              />
              {errors.internshipDuration && <p className="text-sm text-red-500">{errors.internshipDuration.message}</p>}
            </div>

            <div className="space-y-2">
              <Label>
                Are you available full-time or part-time? <span className="text-red-500">*</span>
              </Label>
             
              <RadioGroup
                value={watch("availability") as any} // Sync with React Hook Form
                onValueChange={(value) => setValue("availability", value)} // Update form state
              >
                <div className={`space-y-2 ${errors.availability ? "border border-red-500 rounded-md p-3" : ""}`}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Full-time" id="availability-full" />
                    <Label htmlFor="availability-full">Full-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Part-time" id="availability-part" />
                    <Label htmlFor="availability-part">Part-time </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Flexible" id="availability-flexible" />
                    <Label htmlFor="availability-flexible">Flexible</Label>
                  </div>
                </div>
              </RadioGroup>

              {errors.availability && <p className="text-sm text-red-500">{errors.availability.message}</p>}
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
                    {watch("resume") ? (
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="font-medium">{(watch("resume") as File).name}</span>
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
              {errors.resume && <p className="text-sm text-red-500">{errors.resume.message}</p>}
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
                    {watch("portfolio") ? (
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="font-medium">{(watch("portfolio") as File).name}</span>
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
              <Input
                placeholder="https://myportfolio.com"
                {...register("portfolioUrl")}
                className={errors.portfolioUrl ? "border-red-500" : ""}
              />
              {errors.portfolioUrl && <p className="text-sm text-red-500">{errors.portfolioUrl.message}</p>}
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
                placeholder="Tell us why you're interested in this internship and what you hope to gain from the experience"
                className={`min-h-[150px] ${errors.whyJoinUs ? "border-red-500" : ""}`}
                {...register("whyJoinUs")}
              />
              {errors.whyJoinUs ? (
                <p className="text-sm text-red-500">{errors.whyJoinUs.message}</p>
              ) : (
                <p className="text-sm text-muted-foreground">Please write at least 50 characters</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="referralSource">
                How did you hear about this internship? <span className="text-red-500">*</span>
              </Label>
              <FormField
                control={control}
                name="referralSource"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value as string | undefined}>
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
                )}
              />
              {errors.referralSource && <p className="text-sm text-red-500">{errors.referralSource.message}</p>}
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
                  <p className="text-sm">{watch("fullName") as string ?? ""}</p>

                  <p className="text-sm text-muted-foreground">Email:</p>
                  <p className="text-sm">{watch("email") as string}</p>

                  <p className="text-sm text-muted-foreground">Phone:</p>
                  <p className="text-sm">{watch("phone") as string}</p>

                  {watch("linkedin") as string && (
                    <>
                      <p className="text-sm text-muted-foreground">LinkedIn:</p>
                      <p className="text-sm">{watch("linkedin") as string}</p>
                    </>
                  )}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium">Education & Background</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p className="text-sm text-muted-foreground">Education Level:</p>
                  <p className="text-sm">{watch("educationLevel") as string}</p>

                  <p className="text-sm text-muted-foreground">Field of Study:</p>
                  <p className="text-sm">{watch("fieldOfStudy") as string} </p>

                  <p className="text-sm text-muted-foreground">Institution:</p>
                  <p className="text-sm">{watch("institution") as string} </p>

                  <p className="text-sm text-muted-foreground">Graduation Year:</p>
                  <p className="text-sm">{watch("graduationYear") as string}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium">Internship Details</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p className="text-sm text-muted-foreground">Preferred Role:</p>
                  <p className="text-sm">{watch("preferredRole") as string} </p>

                  <p className="text-sm text-muted-foreground">Prior Experience:</p>
                  <p className="text-sm">{watch("hasPriorExperience") as string}</p>

                  {watch("hasPriorExperience") === "Yes" && (
                    <>
                      <p className="text-sm text-muted-foreground">Experience Details:</p>
                      <p className="text-sm">{watch("priorExperienceDetails") as string}</p>
                    </>
                  )}

                  <p className="text-sm text-muted-foreground">Skills:</p>
                  {/* <p className="text-sm">{watch("skills")?.join(", ") as any}</p> */}
                  <p className="text-sm">{(watch("skills") as string[])?.join(", ")}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium">Availability</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p className="text-sm text-muted-foreground">Duration:</p>
                  <p className="text-sm">{watch("internshipDuration") as string}</p>

                  <p className="text-sm text-muted-foreground">Availability:</p>
                  <p className="text-sm">{watch("availability") as string}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium">Documents</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p className="text-sm text-muted-foreground">Resume:</p>
                  <p className="text-sm">{watch("resume") ? (watch("resume") as File).name : "Not uploaded"}</p>

                  <p className="text-sm text-muted-foreground">Portfolio:</p>
                  <p className="text-sm">{watch("portfolio") ? (watch("portfolio") as File).name : "Not uploaded"}</p>

                  {watch("portfolioUrl") as string && (
                    <>
                      <p className="text-sm text-muted-foreground">Portfolio URL:</p>
                      <p className="text-sm">{watch("portfolioUrl") as string} </p>
                    </>
                  )}
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="termsAgreed" className="hidden" {...register("termsAgreed")} />
                  <Checkbox
                    id="termsAgreed-visual"
                    checked={watch("termsAgreed") as CheckedState | undefined}
                    onCheckedChange={(checked) => setValue("termsAgreed", checked as boolean)}
                    className={errors.termsAgreed ? "border-red-500" : ""}
                  />
                  <Label htmlFor="termsAgreed-visual" className="text-sm">
                    I agree to the terms and conditions of this internship <span className="text-red-500">*</span>
                  </Label>
                </div>
                {errors.termsAgreed && <p className="text-sm text-red-500">{errors.termsAgreed.message}</p>}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div ref={formRef}  className="container max-w-3xl mx-auto py-10 px-4">
      <Card className="cd">
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
              className="bg-primary h-2 rounded-full transition-all progress"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <p className="text-sm font-medium mb-4">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
          </p>
        </div>

        <CardContent >
          <form onSubmit={handleSubmit(onSubmit)}>{renderStepContent()}</form>
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-6">
          <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button className="next-btn" type="button" onClick={handleNext}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button className="next-btn" type="button" onClick={handleSubmit(onSubmit)} disabled={mutation.isPending}>
              {mutation.isPending ? (
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

