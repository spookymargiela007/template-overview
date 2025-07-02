import { Badge } from "@/components/Badge"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"

export default function CreativesDashboard() {
    return (
        <main>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        Creative Intelligence
                    </h1>
                    <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
                        AI-powered creative generation, testing, and optimization for maximum ad performance
                    </p>
                </div>
            </div>
            <Divider />

            {/* Creative Performance Metrics */}
            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Active Creatives
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        89
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            65% high performing
                        </Badge>
                    </div>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        AI-Generated Assets
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        156
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            +23 this week
                        </Badge>
                    </div>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Creative Testing Score
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        8.7/10
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            Excellent
                        </Badge>
                    </div>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Asset Library Value
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                        $45.2K
                    </dd>
                    <div className="mt-4">
                        <Badge variant="success">
                            ROI 340%
                        </Badge>
                    </div>
                </Card>
            </dl>

            {/* Creative Types Performance */}
            <div className="mt-8">
                <Card>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-4">
                        Creative Asset Performance by Type
                    </h3>
                    <p className="text-gray-500 dark:text-gray-500 mb-6">
                        Performance breakdown across different creative formats
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h4 className="font-medium text-gray-900 dark:text-gray-50">Responsive Search Ads</h4>
                                    <Badge variant="warning">Optimizing</Badge>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">34 active assets</p>
                            </div>
                            <div className="flex items-center gap-8 text-sm">
                                <div className="text-center">
                                    <div className="text-gray-500 dark:text-gray-500">CTR</div>
                                    <div className="font-medium">12.4%</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-500 dark:text-gray-500">Conv Rate</div>
                                    <div className="font-medium">8.9%</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h4 className="font-medium text-gray-900 dark:text-gray-50">Shopping Images</h4>
                                    <Badge variant="success">High Performing</Badge>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">12 active assets</p>
                            </div>
                            <div className="flex items-center gap-8 text-sm">
                                <div className="text-center">
                                    <div className="text-gray-500 dark:text-gray-500">CTR</div>
                                    <div className="font-medium">8.3%</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-500 dark:text-gray-500">Conv Rate</div>
                                    <div className="font-medium">12.1%</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h4 className="font-medium text-gray-900 dark:text-gray-50">Video Assets</h4>
                                    <Badge variant="neutral">Active</Badge>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">15 active assets</p>
                            </div>
                            <div className="flex items-center gap-8 text-sm">
                                <div className="text-center">
                                    <div className="text-gray-500 dark:text-gray-500">CTR</div>
                                    <div className="font-medium">9.1%</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-500 dark:text-gray-500">Conv Rate</div>
                                    <div className="font-medium">7.8%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Recent AI Generations */}
            <div className="mt-8">
                <Card>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-4">
                        Recent AI Creative Generations
                    </h3>
                    <p className="text-gray-500 dark:text-gray-500 mb-6">
                        Latest AI-generated creative assets and their performance
                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                                <h4 className="font-medium text-gray-900 dark:text-gray-50">Holiday Sale Headlines</h4>
                                <Badge variant="warning">Testing</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">RSA Headlines</p>
                            <p className="text-xs text-gray-400">Generated 2h ago</p>
                        </div>
                        <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                                <h4 className="font-medium text-gray-900 dark:text-gray-50">Product Display Banners</h4>
                                <Badge variant="success">Live</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">Display Images</p>
                            <p className="text-xs text-gray-400">Generated 4h ago</p>
                        </div>
                        <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                                <h4 className="font-medium text-gray-900 dark:text-gray-50">Video Ad Scripts</h4>
                                <Badge variant="neutral">Approved</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">Video Copy</p>
                            <p className="text-xs text-gray-400">Generated 6h ago</p>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    )
}