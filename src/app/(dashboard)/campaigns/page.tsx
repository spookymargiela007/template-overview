"use client"

import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { CategoryBar } from "@/components/CategoryBar"
import { Divider } from "@/components/Divider"
import { LineChartSupport } from "@/components/LineChartSupport"
import { ProgressCircle } from "@/components/ProgressCircle"
import { RiAddLine, RiPauseLine, RiPlayLine, RiTrendingUpLine } from "@remixicon/react"
import React from "react"

export default function CampaignsDashboard() {
    const [isCreatingCampaign, setIsCreatingCampaign] = React.useState(false)

    // Mock data for campaign performance
    const campaignData = [
        { time: "00:00", impressions: 12500, clicks: 875, conversions: 45 },
        { time: "04:00", impressions: 18200, clicks: 1240, conversions: 67 },
        { time: "08:00", impressions: 22800, clicks: 1680, conversions: 89 },
        { time: "12:00", impressions: 25200, clicks: 1920, conversions: 112 },
        { time: "16:00", impressions: 28500, clicks: 2140, conversions: 128 },
        { time: "20:00", impressions: 24100, clicks: 1850, conversions: 95 },
    ]

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
                <div className="flex gap-2">
                    <Button
                        variant="secondary"
                        className="flex items-center gap-2 text-base sm:text-sm"
                    >
                        <RiTrendingUpLine className="-mr-0.5 size-5 shrink-0" aria-hidden="true" />
                        Optimize All
                    </Button>
                    <Button
                        onClick={() => setIsCreatingCampaign(true)}
                        className="flex items-center gap-2 text-base sm:text-sm"
                    >
                        Create Campaign
                        <RiAddLine className="-mr-0.5 size-5 shrink-0" aria-hidden="true" />
                    </Button>
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
                    <div className="mt-4 flex items-center gap-2">
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
                    <CategoryBar
                        values={[75, 15, 10]}
                        className="mt-4"
                        colors={["blue", "amber", "red"]}
                        showLabels={false}
                    />
                    <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs">
                        <li className="flex items-center gap-1">
                            <span className="size-2 shrink-0 rounded-sm bg-blue-500" />
                            <span>Search 75%</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="size-2 shrink-0 rounded-sm bg-amber-500" />
                            <span>Display 15%</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="size-2 shrink-0 rounded-sm bg-red-500" />
                            <span>Video 10%</span>
                        </li>
                    </ul>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Conversion Rate
                    </dt>
                    <div className="mt-4 flex flex-nowrap items-center justify-between gap-y-4">
                        <dd className="space-y-3">
                            <div>
                                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                                    5.8%
                                </span>
                                <div className="flex items-center gap-2 mt-1">
                                    <Badge variant="success">
                                        +0.7%
                                    </Badge>
                                    <span className="text-xs text-gray-500">vs last week</span>
                                </div>
                            </div>
                        </dd>
                        <ProgressCircle value={58} radius={45} strokeWidth={7} variant="success" />
                    </div>
                </Card>

                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        AI Optimizations
                    </dt>
                    <div className="mt-4 flex items-center gap-x-8 gap-y-4">
                        <dd className="space-y-3 whitespace-nowrap">
                            <div>
                                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                                    156
                                </span>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-gray-500">adjustments today</span>
                                </div>
                            </div>
                        </dd>
                        <LineChartSupport
                            className="h-28"
                            data={campaignData}
                            index="time"
                            categories={["conversions"]}
                            colors={["emerald"]}
                            showTooltip={false}
                            valueFormatter={(number: number) =>
                                Intl.NumberFormat("us").format(number).toString()
                            }
                            startEndOnly={true}
                            showYAxis={false}
                            showLegend={false}
                        />
                    </div>
                </Card>
            </dl>

            {/* Campaign Performance Chart */}
            <div className="mt-8">
                <Card>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                                Campaign Performance Trends
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                Real-time performance across all active campaigns
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant="neutral">Last 24h</Badge>
                        </div>
                    </div>
                    <LineChartSupport
                        className="h-80"
                        data={campaignData}
                        index="time"
                        categories={["impressions", "clicks", "conversions"]}
                        colors={["blue", "amber", "emerald"]}
                        valueFormatter={(number: number) =>
                            Intl.NumberFormat("us").format(number).toString()
                        }
                        showLegend={true}
                        showYAxis={true}
                    />
                </Card>
            </div>

            {/* Top Performing Campaigns */}
            <div className="mt-8">
                <Card>
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                            Top Performing Campaigns
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            AI-optimized campaigns driving the best results
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { name: "Black Friday Sale - Search", type: "Search", status: "Active", ctr: "8.2%", conv: "12.4%", cost: "$2,840" },
                            { name: "Holiday Shopping - Performance Max", type: "Performance Max", status: "Active", ctr: "5.9%", conv: "9.8%", cost: "$1,950" },
                            { name: "Brand Awareness - Display", type: "Display", status: "Paused", ctr: "3.1%", conv: "4.2%", cost: "$890" },
                            { name: "Mobile App Install", type: "App", status: "Active", ctr: "6.7%", conv: "15.2%", cost: "$1,120" },
                        ].map((campaign, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <h4 className="font-medium text-gray-900 dark:text-gray-50">{campaign.name}</h4>
                                        <Badge variant={campaign.status === "Active" ? "success" : "neutral"}>
                                            {campaign.status}
                                        </Badge>
                                        <Badge variant="neutral">{campaign.type}</Badge>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 text-sm">
                                    <div className="text-center">
                                        <div className="text-gray-500 dark:text-gray-500">CTR</div>
                                        <div className="font-medium">{campaign.ctr}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-gray-500 dark:text-gray-500">Conv Rate</div>
                                        <div className="font-medium">{campaign.conv}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-gray-500 dark:text-gray-500">Spend</div>
                                        <div className="font-medium">{campaign.cost}</div>
                                    </div>
                                    <div className="flex gap-1">
                                        <Button size="sm" variant="ghost">
                                            {campaign.status === "Active" ? <RiPauseLine className="size-4" /> : <RiPlayLine className="size-4" />}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </main>
    )
}