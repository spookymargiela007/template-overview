import { faker } from "@faker-js/faker"
import fs from "fs"
import path from "path"
import { agentTypes, campaignFocusAreas, type Agent } from "./schema"

// Google Ads AI agent names that sound professional and AI-focused
const aiAgentNames = [
  "AdOptima Pro", "SmartBid Engine", "CreativeGen AI", "AudienceMax", "KeywordIQ",
  "BudgetMaster AI", "ConversionBot", "QualityScore+", "SeasonalAI", "CompetitorEye",
  "LandingOptim", "NegativeGuard", "PerformanceMax AI", "TrendSpotter", "ROI Maximizer",
  "SmartSchedule", "GeotargetPro", "DeviceOptim", "VideoAI Generator", "ShoppingBot",
  "LocalSearch AI", "MobileFirst", "VoiceSearch Pro", "RetargetingGenius", "CrossChannel AI"
]

const accountNames = [
  "Global Retail Corp", "TechStart Solutions", "Fashion Forward Ltd", "Home & Garden Pro",
  "Automotive Plus", "Healthcare Partners", "Educational Services", "Financial Advisors Inc",
  "Travel & Hospitality", "Food & Beverage Co", "Sports Equipment Ltd", "Beauty & Wellness",
  "Pet Care Solutions", "Electronics Hub", "Real Estate Pro", "Fitness First", "Art & Crafts",
  "Professional Services", "Entertainment Group", "Green Energy Corp"
]

function generateAgent(): Agent {
  const agentType = faker.helpers.arrayElement(agentTypes)
  const campaignFocus = faker.helpers.arrayElement(campaignFocusAreas)
  const accountName = faker.helpers.arrayElement(accountNames)
  const agentName = faker.helpers.arrayElement(aiAgentNames)

  const activationDate = faker.date.between({ from: '2023-01-01', to: '2024-12-01' })
  const lastActive = faker.datatype.boolean(0.9)
    ? faker.date.between({ from: activationDate, to: new Date() }).toISOString()
    : null

  return {
    agent_id: faker.string.uuid(),
    agent_name: agentName,
    agent_type: agentType.value,
    account_name: accountName,
    activation_date: activationDate.toISOString(),
    last_active: lastActive,
    campaign_focus: campaignFocus.value,
    contact_email: faker.internet.email(),
    is_active: faker.datatype.boolean(0.85), // 85% active
    optimizations_made: faker.number.int({ min: 0, max: 500 }),
    cost_savings: faker.number.int({ min: 0, max: 50000 }),
    performance_score: faker.number.int({ min: 65, max: 100 }),
    auto_bidding_enabled: faker.datatype.boolean(0.75), // 75% have auto-bidding
  }
}

function generateAgents(count: number): Agent[] {
  return Array.from({ length: count }, generateAgent)
}

const agents = generateAgents(50)

const outputPath = path.join(__dirname, "agents.ts")
const content = `// This file is auto-generated. Do not edit manually.
export const agents = ${JSON.stringify(agents, null, 2)} as const`

fs.writeFileSync(outputPath, content)
console.log(`Generated ${agents.length} Google Ads AI agents`)
