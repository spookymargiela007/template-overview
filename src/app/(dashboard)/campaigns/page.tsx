import { Badge } from "@/components/Badge"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"

export default function CampaignsDashboard() {
    return (
        <main>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        Campaign Intelligence
                    </h1>
                    <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
                        AI-powered campaign management with real-time optimization and performance insights
                    </p>
                </div>
            </div>
            <Divider />

            {/* Key Metrics Cards */}
            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Active Campaigns
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        24
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            +3 this week
                        </Badge>
                    </div>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Total Spend Today
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        $12,450
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            On target
                        </Badge>
                    </div>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Conversion Rate
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        5.8%
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            +0.7% vs last week
                        </Badge>
                    </div>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        AI Optimizations
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        156
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            adjustments today
                        </Badge>
                    </div>
                </Card>
            </dl>

            <div className="mt-8">
                <Card>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-4">
                        Campaign Performance Overview
                    </h3>
                    <p className="text-gray-500 dark:text-gray-500">
                        Your Google Ads campaigns are performing well with AI-driven optimizations running continuously in the background.
                    </p>
                    <div className="mt-6 space-y-4">
                        <div className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-50">Black Friday Sale - Search</h4>
                                <p className="text-sm text-gray-500">Search Campaign • Active</p>
                            </div>
                            <div className="text-right">
                                <div className="font-medium text-gray-900 dark:text-gray-50">CTR: 8.2%</div>
                                <div className="text-sm text-gray-500">Spend: $2,840</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-50">Holiday Shopping - Performance Max</h4>
                                <p className="text-sm text-gray-500">Performance Max • Active</p>
                            </div>
                            <div className="text-right">
                                <div className="font-medium text-gray-900 dark:text-gray-50">CTR: 5.9%</div>
                                <div className="text-sm text-gray-500">Spend: $1,950</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    )
}