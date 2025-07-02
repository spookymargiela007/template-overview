"use client"
import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { CheckboxExclude } from "@/components/Checkbox"
import { Divider } from "@/components/Divider"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import { ProgressCircle } from "@/components/ProgressCircle"
import { Slider } from "@/components/Slider"
import { RiGroupLine, RiResetLeftLine, RiTargetLine } from "@remixicon/react"
import React from "react"

export default function AudienceDashboard() {
    // Mock audience segments data
    const audienceSegments = [
        { name: "High-Value Shoppers", size: 125000, ctr: 8.2, convRate: 12.4, enabled: true },
        { name: "Cart Abandoners", size: 89000, ctr: 6.7, convRate: 9.8, enabled: true },
        { name: "Similar to Converters", size: 250000, ctr: 5.1, convRate: 7.2, enabled: true },
        { name: "Custom Intent - Electronics", size: 67000, ctr: 7.9, convRate: 11.1, enabled: false },
        { name: "In-Market Shoppers", size: 180000, ctr: 4.8, convRate: 6.5, enabled: true },
        { name: "Demographic - Premium", size: 45000, ctr: 9.1, convRate: 15.2, enabled: true },
    ]

    const [excludedSegments, setExcludedSegments] = React.useState<Set<string>>(new Set())
    const [reachMultiplier, setReachMultiplier] = React.useState<number>(1.0)

    const aggregateStats = React.useMemo(() => {
        const activeSegments = audienceSegments.filter(
            (segment) => !excludedSegments.has(segment.name) && segment.enabled
        )

        const totalReach = Math.round(activeSegments.reduce((sum, segment) => sum + segment.size, 0) * reachMultiplier)
        const avgCTR = activeSegments.length > 0
            ? (activeSegments.reduce((sum, segment) => sum + segment.ctr, 0) / activeSegments.length)
            : 0
        const avgConvRate = activeSegments.length > 0
            ? (activeSegments.reduce((sum, segment) => sum + segment.convRate, 0) / activeSegments.length)
            : 0

        return {
            totalReach,
            avgCTR: Number(avgCTR.toFixed(2)),
            avgConvRate: Number(avgConvRate.toFixed(2)),
            activeSegments: activeSegments.length,
        }
    }, [excludedSegments, reachMultiplier])

    const handleSegmentToggle = (segmentName: string) => {
        setExcludedSegments((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(segmentName)) {
                newSet.delete(segmentName)
            } else {
                newSet.add(segmentName)
            }
            return newSet
        })
    }

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
                <div className="flex gap-2">
                    <Button variant="secondary" className="flex items-center gap-2 text-base sm:text-sm">
                        <RiTargetLine className="-mr-0.5 size-5 shrink-0" aria-hidden="true" />
                        Create Lookalike
                    </Button>
                    <Button className="flex items-center gap-2 text-base sm:text-sm">
                        <RiGroupLine className="-mr-0.5 size-5 shrink-0" aria-hidden="true" />
                        Build Audience
                    </Button>
                </div>
            </div>
            <Divider />

            {/* Audience Configuration Panel */}
            <div className="mt-8 flex w-full flex-wrap items-start gap-6 rounded-lg bg-gray-50/50 p-6 ring-1 ring-gray-200 dark:bg-[#090E1A] dark:ring-gray-800">
                <div className="w-full sm:w-96">
                    <Label htmlFor="reach-multiplier" className="text-base font-medium sm:text-sm">
                        Audience Reach Multiplier
                    </Label>
                    <div className="mt-2 flex items-center gap-4">
                        <Slider
                            value={[reachMultiplier]}
                            onValueChange={([value]) => setReachMultiplier(value)}
                            min={0.5}
                            max={3.0}
                            step={0.1}
                            className="w-full sm:max-w-56"
                        />
                        <Input
                            id="reach-multiplier"
                            type="number"
                            value={reachMultiplier.toFixed(1)}
                            onChange={(e) => setReachMultiplier(Number(e.target.value))}
                            min={0.5}
                            max={3.0}
                            step={0.1}
                            className="w-20 sm:w-16"
                        />
                        {reachMultiplier !== 1.0 && (
                            <Button
                                onClick={() => setReachMultiplier(1.0)}
                                variant="ghost"
                                className="group -ml-2.5 py-2.5 sm:py-2"
                            >
                                <RiResetLeftLine className="size-5 text-gray-500 transition group-hover:-rotate-45 group-hover:text-gray-700 dark:text-gray-500 group-hover:dark:text-gray-300" />
                                <span className="sr-only">Reset</span>
                            </Button>
                        )}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                        Adjust projected audience reach based on expansion settings
                    </p>
                </div>

                <div>
                    <legend className="font-medium text-gray-900 sm:text-sm dark:text-gray-50">
                        Select audience segments to exclude
                    </legend>
                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {audienceSegments.map((segment) => (
                            <div key={segment.name} className="flex items-center gap-2.5">
                                <CheckboxExclude
                                    id={segment.name}
                                    checked={excludedSegments.has(segment.name)}
                                    onCheckedChange={() => handleSegmentToggle(segment.name)}
                                    aria-label={segment.name}
                                />
                                <div className="flex-1">
                                    <Label htmlFor={segment.name} className="whitespace-nowrap text-base sm:text-sm">
                                        {segment.name}
                                    </Label>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Badge variant={segment.enabled ? "success" : "neutral"} className="text-xs">
                                            {segment.enabled ? "Active" : "Paused"}
                                        </Badge>
                                        <span className="text-xs text-gray-500">{(segment.size / 1000).toFixed(0)}K users</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Audience Performance Metrics */}
            <section className="mt-12">
                <h2 className="text-lg font-medium text-gray-900 mb-6 dark:text-gray-50">
                    Projected Performance
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                    Total Reach
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                                    {(aggregateStats.totalReach / 1000000).toFixed(1)}M
                                </dd>
                            </div>
                            <ProgressCircle
                                radius={35}
                                strokeWidth={5}
                                value={Math.min((aggregateStats.totalReach / 1000000) * 10, 100)}
                                variant="neutral"
                            />
                        </div>
                    </Card>

                    <Card>
                        <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                            Active Segments
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                            {aggregateStats.activeSegments}
                        </dd>
                        <div className="mt-4">
                            <Badge variant="success">
                                of {audienceSegments.filter(s => s.enabled).length} enabled
                            </Badge>
                        </div>
                    </Card>

                    <Card>
                        <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                            Avg. Click Rate
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                            {aggregateStats.avgCTR}%
                        </dd>
                        <div className="mt-4">
                            <Badge variant={aggregateStats.avgCTR > 6 ? "success" : "warning"}>
                                {aggregateStats.avgCTR > 6 ? "Above average" : "Needs optimization"}
                            </Badge>
                        </div>
                    </Card>

                    <Card>
                        <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                            Avg. Conversion Rate
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                            {aggregateStats.avgConvRate}%
                        </dd>
                        <div className="mt-4">
                            <Badge variant={aggregateStats.avgConvRate > 8 ? "success" : "warning"}>
                                {aggregateStats.avgConvRate > 8 ? "High converting" : "Monitor closely"}
                            </Badge>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Audience Segment Details */}
            <section className="mt-12">
                <Card>
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                            Audience Segment Performance
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            Detailed performance metrics for each audience segment
                        </p>
                    </div>

                    <div className="space-y-4">
                        {audienceSegments.map((segment, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center justify-between p-4 border rounded-lg transition-opacity ${excludedSegments.has(segment.name)
                                        ? 'opacity-50 border-gray-200 dark:border-gray-800'
                                        : 'border-gray-200 dark:border-gray-800'
                                    }`}
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <h4 className="font-medium text-gray-900 dark:text-gray-50">{segment.name}</h4>
                                        <Badge variant={segment.enabled ? "success" : "neutral"}>
                                            {segment.enabled ? "Active" : "Paused"}
                                        </Badge>
                                        {excludedSegments.has(segment.name) && (
                                            <Badge variant="warning">Excluded</Badge>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {(segment.size / 1000).toFixed(0)}K potential users
                                    </p>
                                </div>
                                <div className="flex items-center gap-8 text-sm">
                                    <div className="text-center">
                                        <div className="text-gray-500 dark:text-gray-500">CTR</div>
                                        <div className="font-medium">{segment.ctr}%</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-gray-500 dark:text-gray-500">Conv Rate</div>
                                        <div className="font-medium">{segment.convRate}%</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-gray-500 dark:text-gray-500">Performance</div>
                                        <ProgressCircle
                                            radius={20}
                                            strokeWidth={3}
                                            value={Math.min(segment.ctr * segment.convRate, 100)}
                                            variant={segment.ctr * segment.convRate > 50 ? "success" : "warning"}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>
        </main>
    )
}