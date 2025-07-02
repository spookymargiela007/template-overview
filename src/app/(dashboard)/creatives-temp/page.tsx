import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { CategoryBar } from "@/components/CategoryBar"
import { Divider } from "@/components/Divider"
import { ProgressCircle } from "@/components/ProgressCircle"

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
                <div className="flex gap-2">
                    <Button variant="secondary" className="flex items-center gap-2 text-base sm:text-sm">
                        Generate Variations
                    </Button>
                    <Button className="flex items-center gap-2 text-base sm:text-sm">
                        Create Asset
                    </Button>
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
                    <CategoryBar
                        values={[65, 25, 10]}
                        className="mt-4"
                        colors={["emerald", "amber", "red"]}
                        showLabels={false}
                    />
                    <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs">
                        <li className="flex items-center gap-1">
                            <span className="size-2 shrink-0 rounded-sm bg-emerald-500" />
                            <span>High performing 65%</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="size-2 shrink-0 rounded-sm bg-amber-500" />
                            <span>Testing 25%</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="size-2 shrink-0 rounded-sm bg-red-500" />
                            <span>Low performing 10%</span>
                        </li>
                    </ul>
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
                    <div className="mt-4 flex flex-nowrap items-center justify-between gap-y-4">
                        <dd className="space-y-3">
                            <div>
                                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                                    8.7/10
                                </span>
                                <div className="flex items-center gap-2 mt-1">
                                    <Badge variant="success">
                                        Excellent
                                    </Badge>
                                </div>
                            </div>
                        </dd>
                        <ProgressCircle value={87} radius={45} strokeWidth={7} variant="success" />
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
            <div className="mt-12">
                <Card>
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                            Creative Asset Performance by Type
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            Performance breakdown across different creative formats
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { type: "Responsive Search Ads", count: 34, ctr: "12.4%", convRate: "8.9%", status: "Optimizing" },
                            { type: "Display Images", count: 28, ctr: "6.7%", convRate: "4.2%", status: "Active" },
                            { type: "Video Assets", count: 15, ctr: "9.1%", convRate: "7.8%", status: "Active" },
                            { type: "Shopping Images", count: 12, ctr: "8.3%", convRate: "12.1%", status: "High Performing" },
                        ].map((creative, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <h4 className="font-medium text-gray-900 dark:text-gray-50">{creative.type}</h4>
                                        <Badge variant={
                                            creative.status === "High Performing" ? "success" :
                                                creative.status === "Optimizing" ? "warning" : "neutral"
                                        }>
                                            {creative.status}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{creative.count} active assets</p>
                                </div>
                                <div className="flex items-center gap-8 text-sm">
                                    <div className="text-center">
                                        <div className="text-gray-500 dark:text-gray-500">CTR</div>
                                        <div className="font-medium">{creative.ctr}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-gray-500 dark:text-gray-500">Conv Rate</div>
                                        <div className="font-medium">{creative.convRate}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-gray-500 dark:text-gray-500">Performance</div>
                                        <ProgressCircle
                                            radius={20}
                                            strokeWidth={3}
                                            value={parseFloat(creative.ctr) * 8}
                                            variant={parseFloat(creative.ctr) > 8 ? "success" : "warning"}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Recent AI Generations */}
            <div className="mt-8">
                <Card>
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                            Recent AI Creative Generations
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            Latest AI-generated creative assets and their performance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Holiday Sale Headlines", type: "RSA Headlines", generated: "2h ago", status: "Testing" },
                            { title: "Product Display Banners", type: "Display Images", generated: "4h ago", status: "Live" },
                            { title: "Video Ad Scripts", type: "Video Copy", generated: "6h ago", status: "Approved" },
                            { title: "Mobile App Promos", type: "App Install Ads", generated: "8h ago", status: "Live" },
                            { title: "Local Business Ads", type: "Local Campaigns", generated: "1d ago", status: "Live" },
                            { title: "Seasonal Descriptions", type: "Product Descriptions", generated: "1d ago", status: "Testing" },
                        ].map((item, idx) => (
                            <div key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-medium text-gray-900 dark:text-gray-50">{item.title}</h4>
                                    <Badge variant={
                                        item.status === "Live" ? "success" :
                                            item.status === "Testing" ? "warning" : "neutral"
                                    }>
                                        {item.status}
                                    </Badge>
                                </div>
                                <p className="text-sm text-gray-500 mb-2">{item.type}</p>
                                <p className="text-xs text-gray-400">Generated {item.generated}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </main>
    )
}