import { Badge } from "@/components/Badge"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"

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
                        <div className="text-center">
                            <div className="text-6xl font-bold text-gray-900 dark:text-gray-50">8.7</div>
                            <div className="text-sm text-gray-500">out of 10</div>
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
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-4">
                        Priority Optimization Recommendations
                    </h3>
                    <p className="text-gray-500 dark:text-gray-500 mb-6">
                        AI-identified opportunities ranked by impact potential
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-medium text-gray-900 dark:text-gray-50">Expand high-performing keywords</h4>
                                    <Badge variant="error">High Impact</Badge>
                                    <Badge variant="neutral">Keywords</Badge>
                                </div>
                                <p className="text-sm text-gray-500">Add 15 related keywords with 8.2% avg CTR</p>
                            </div>
                            <div className="text-right">
                                <div className="font-medium text-gray-900 dark:text-gray-50">$450/month</div>
                                <div className="text-sm text-gray-500">potential saving</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-medium text-gray-900 dark:text-gray-50">Optimize bidding strategy</h4>
                                    <Badge variant="error">High Impact</Badge>
                                    <Badge variant="neutral">Bidding</Badge>
                                </div>
                                <p className="text-sm text-gray-500">Switch to Target CPA for 3 campaigns showing 23% higher conv rate potential</p>
                            </div>
                            <div className="text-right">
                                <div className="font-medium text-gray-900 dark:text-gray-50">$680/month</div>
                                <div className="text-sm text-gray-500">potential saving</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-medium text-gray-900 dark:text-gray-50">Remove underperforming ads</h4>
                                    <Badge variant="warning">Medium Impact</Badge>
                                    <Badge variant="neutral">Creatives</Badge>
                                </div>
                                <p className="text-sm text-gray-500">Pause 8 ads with &lt;2% CTR and no conversions in 30 days</p>
                            </div>
                            <div className="text-right">
                                <div className="font-medium text-gray-900 dark:text-gray-50">$290/month</div>
                                <div className="text-sm text-gray-500">potential saving</div>
                            </div>
                        </div>
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
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-gray-900 dark:text-gray-50">Quality Score</div>
                                <div className="text-sm text-gray-500">Good</div>
                            </div>
                            <div className="text-right">
                                <div className="font-medium">8.4/10</div>
                                <div className="text-sm text-green-600">+0.3</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-gray-900 dark:text-gray-50">Ad Relevance</div>
                                <div className="text-sm text-gray-500">Above Average</div>
                            </div>
                            <div className="text-right">
                                <div className="font-medium">7.9/10</div>
                                <div className="text-sm text-green-600">+0.1</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-gray-900 dark:text-gray-50">Landing Page Experience</div>
                                <div className="text-sm text-gray-500">Needs Work</div>
                            </div>
                            <div className="text-right">
                                <div className="font-medium">6.2/10</div>
                                <div className="text-sm text-red-600">-0.2</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-gray-900 dark:text-gray-50">Expected CTR</div>
                                <div className="text-sm text-gray-500">Excellent</div>
                            </div>
                            <div className="text-right">
                                <div className="font-medium">9.1/10</div>
                                <div className="text-sm text-green-600">+0.5</div>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-4">
                        Automated Optimizations Today
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start justify-between py-2">
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">Increased bids for high-converting keywords</div>
                                <div className="text-xs text-gray-500">2 hours ago</div>
                            </div>
                            <Badge variant="success" className="text-xs">+$340 est. revenue</Badge>
                        </div>
                        <div className="flex items-start justify-between py-2">
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">Paused underperforming ad variants</div>
                                <div className="text-xs text-gray-500">4 hours ago</div>
                            </div>
                            <Badge variant="success" className="text-xs">-$85 wasted spend</Badge>
                        </div>
                        <div className="flex items-start justify-between py-2">
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">Added negative keywords</div>
                                <div className="text-xs text-gray-500">6 hours ago</div>
                            </div>
                            <Badge variant="success" className="text-xs">+2.1% CTR improvement</Badge>
                        </div>
                        <div className="flex items-start justify-between py-2">
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">Adjusted audience targeting</div>
                                <div className="text-xs text-gray-500">8 hours ago</div>
                            </div>
                            <Badge variant="success" className="text-xs">+12% conversion rate</Badge>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    )
}