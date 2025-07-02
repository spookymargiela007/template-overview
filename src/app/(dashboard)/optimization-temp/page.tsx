import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"
import { ProgressCircle } from "@/components/ProgressCircle"

export default function OptimizationDashboard() {
    return (
        <main>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        Optimization Intelligence
                    </h1>
                    <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
                        AI-powered optimization recommendations and automated performance enhancements
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" className="flex items-center gap-2 text-base sm:text-sm">
                        Run Audit
                    </Button>
                    <Button className="flex items-center gap-2 text-base sm:text-sm">
                        Apply All
                    </Button>
                </div>
            </div>
            <Divider />

            {/* Optimization Score */}
            <div className="mt-8">
                <Card>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                                Account Optimization Score
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                Overall performance and optimization potential
                            </p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">8.7</div>
                                <div className="text-sm text-gray-500">out of 10</div>
                            </div>
                            <ProgressCircle value={87} radius={60} strokeWidth={8} variant="success" />
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="text-center">
                            <div className="text-lg font-semibold text-gray-900 dark:text-gray-50">23</div>
                            <div className="text-sm text-gray-500">Recommendations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold text-gray-900 dark:text-gray-50">$2.4K</div>
                            <div className="text-sm text-gray-500">Potential Savings</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold text-gray-900 dark:text-gray-50">+18%</div>
                            <div className="text-sm text-gray-500">Performance Uplift</div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Top Recommendations */}
            <div className="mt-8">
                <Card>
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                            Priority Optimization Recommendations
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            AI-identified opportunities ranked by impact potential
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                title: "Expand high-performing keywords",
                                impact: "High",
                                saving: "$450/month",
                                description: "Add 15 related keywords with 8.2% avg CTR",
                                category: "Keywords"
                            },
                            {
                                title: "Optimize bidding strategy",
                                impact: "High",
                                saving: "$680/month",
                                description: "Switch to Target CPA for 3 campaigns showing 23% higher conv rate potential",
                                category: "Bidding"
                            },
                            {
                                title: "Remove underperforming ads",
                                impact: "Medium",
                                saving: "$290/month",
                                description: "Pause 8 ads with <2% CTR and no conversions in 30 days",
                                category: "Creatives"
                            },
                            {
                                title: "Adjust audience targeting",
                                impact: "Medium",
                                saving: "$340/month",
                                description: "Exclude 4 low-converting demographics, focus on high-value segments",
                                category: "Audiences"
                            },
                            {
                                title: "Update ad extensions",
                                impact: "Low",
                                saving: "$120/month",
                                description: "Add sitelinks and callouts to improve ad real estate and CTR",
                                category: "Extensions"
                            },
                        ].map((rec, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="font-medium text-gray-900 dark:text-gray-50">{rec.title}</h4>
                                        <Badge variant={
                                            rec.impact === "High" ? "error" :
                                                rec.impact === "Medium" ? "warning" : "neutral"
                                        }>
                                            {rec.impact} Impact
                                        </Badge>
                                        <Badge variant="neutral">{rec.category}</Badge>
                                    </div>
                                    <p className="text-sm text-gray-500">{rec.description}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <div className="font-medium text-gray-900 dark:text-gray-50">{rec.saving}</div>
                                        <div className="text-sm text-gray-500">potential saving</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="ghost">Preview</Button>
                                        <Button size="sm">Apply</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Performance Insights */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-4">
                        Campaign Health Check
                    </h3>
                    <div className="space-y-4">
                        {[
                            { metric: "Quality Score", score: 8.4, status: "Good", trend: "+0.3" },
                            { metric: "Ad Relevance", score: 7.9, status: "Above Average", trend: "+0.1" },
                            { metric: "Landing Page Experience", score: 6.2, status: "Needs Work", trend: "-0.2" },
                            { metric: "Expected CTR", score: 9.1, status: "Excellent", trend: "+0.5" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium text-gray-900 dark:text-gray-50">{item.metric}</div>
                                    <div className="text-sm text-gray-500">{item.status}</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <div className="font-medium">{item.score}/10</div>
                                        <div className={`text-sm ${item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                            {item.trend}
                                        </div>
                                    </div>
                                    <ProgressCircle
                                        radius={20}
                                        strokeWidth={3}
                                        value={item.score * 10}
                                        variant={item.score > 8 ? "success" : item.score > 6 ? "warning" : "error"}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-4">
                        Automated Optimizations Today
                    </h3>
                    <div className="space-y-3">
                        {[
                            { action: "Increased bids for high-converting keywords", time: "2 hours ago", impact: "+$340 est. revenue" },
                            { action: "Paused underperforming ad variants", time: "4 hours ago", impact: "-$85 wasted spend" },
                            { action: "Added negative keywords", time: "6 hours ago", impact: "+2.1% CTR improvement" },
                            { action: "Adjusted audience targeting", time: "8 hours ago", impact: "+12% conversion rate" },
                            { action: "Updated ad schedules", time: "12 hours ago", impact: "+5% impression share" },
                        ].map((opt, idx) => (
                            <div key={idx} className="flex items-start justify-between py-2">
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{opt.action}</div>
                                    <div className="text-xs text-gray-500">{opt.time}</div>
                                </div>
                                <Badge variant="success" className="text-xs">{opt.impact}</Badge>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </main>
    )
}