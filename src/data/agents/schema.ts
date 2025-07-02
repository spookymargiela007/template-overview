import { z } from "zod";

export const schemaAgents = z.object({
  agent_id: z.string(),
  agent_name: z.string(),
  agent_type: z.string(), // Campaign Optimizer, Bid Manager, Creative Generator, etc.
  account_name: z.string(),
  activation_date: z.string(),
  last_active: z.string().nullable(),
  campaign_focus: z.string(),
  contact_email: z.string(),
  is_active: z.boolean(),
  optimizations_made: z.number(),
  cost_savings: z.number(), // in dollars
  performance_score: z.number(), // 0-100
  auto_bidding_enabled: z.boolean(),
})

export type Agent = z.infer<typeof schemaAgents>

export const agentTypes: { value: string; label: string }[] = [
  {
    value: "campaign-optimizer",
    label: "Campaign Optimizer",
  },
  {
    value: "bid-manager",
    label: "Smart Bid Manager",
  },
  {
    value: "creative-generator",
    label: "Creative Generator",
  },
  {
    value: "audience-expander",
    label: "Audience Expander",
  },
  {
    value: "keyword-researcher",
    label: "Keyword Researcher",
  },
  {
    value: "budget-allocator",
    label: "Budget Allocator",
  },
  {
    value: "conversion-tracker",
    label: "Conversion Tracker",
  },
  {
    value: "quality-score-optimizer",
    label: "Quality Score Optimizer",
  },
  {
    value: "seasonal-adjuster",
    label: "Seasonal Adjuster",
  },
  {
    value: "competitor-analyst",
    label: "Competitor Analyst",
  },
  {
    value: "landing-page-optimizer",
    label: "Landing Page Optimizer",
  },
  {
    value: "negative-keyword-manager",
    label: "Negative Keyword Manager",
  },
]

export const campaignFocusAreas: { value: string; label: string }[] = [
  {
    value: "search-campaigns",
    label: "Search Campaigns",
  },
  {
    value: "display-campaigns",
    label: "Display Campaigns",
  },
  {
    value: "shopping-campaigns",
    label: "Shopping Campaigns",
  },
  {
    value: "video-campaigns",
    label: "Video Campaigns",
  },
  {
    value: "app-campaigns",
    label: "App Campaigns",
  },
  {
    value: "smart-campaigns",
    label: "Smart Campaigns",
  },
  {
    value: "performance-max",
    label: "Performance Max",
  },
  {
    value: "local-campaigns",
    label: "Local Campaigns",
  },
]
