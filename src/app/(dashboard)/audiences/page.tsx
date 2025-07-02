import { Badge } from "@/components/Badge"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"

export default function AudiencesDashboard() {
    return (
        <main>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        Audience Intelligence
                    </h1>
                    <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
                        AI-powered audience segmentation and targeting optimization for maximum campaign performance
                    </p>
                </div>
            </div>
            <Divider />

            {/* Audience Metrics Cards */}
            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Total Reach
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        2.1M
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            Active audiences
                        </Badge>
                    </div>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Active Segments
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        12
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            of 15 enabled
                        </Badge>
                    </div>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Avg. Click Rate
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        7.2%
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            Above average
                        </Badge>
                    </div>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Avg. Conversion Rate
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        9.1%
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            High converting
                        </Badge>
                    </div>
                </Card>
            </dl>

            {/* Audience Segments */}
            <div className="mt-8">
                <Card>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-4">
                        Top Performing Audience Segments
                    </h3>
                    <p className="text-gray-500 dark:text-gray-500 mb-6">
                        AI-optimized segments driving the best engagement and conversions
                    </p>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-50">High-Value Shoppers</h4>
                                <p className="text-sm text-gray-500">125K users • Active</p>
                            </div>
                            <div className="text-right">
                                <div className="font-medium text-gray-900 dark:text-gray-50">CTR: 8.2%</div>
                                <div className="text-sm text-gray-500">Conv Rate: 12.4%</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-50">Similar to Converters</h4>
                                <p className="text-sm text-gray-500">250K users • Active</p>
                            </div>
                            <div className="text-right">
                                <div className="font-medium text-gray-900 dark:text-gray-50">CTR: 5.1%</div>
                                <div className="text-sm text-gray-500">Conv Rate: 7.2%</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-50">In-Market Shoppers</h4>
                                <p className="text-sm text-gray-500">180K users • Active</p>
                            </div>
                            <div className="text-right">
                                <div className="font-medium text-gray-900 dark:text-gray-50">CTR: 4.8%</div>
                                <div className="text-sm text-gray-500">Conv Rate: 6.5%</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    )
}