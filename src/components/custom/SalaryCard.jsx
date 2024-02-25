import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
  ]

const SalaryCard = () => {
    const [goal, setGoal] = React.useState(350)
 
  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Персональные данные</CardTitle>
                <CardDescription>Заработная плата</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 shrink-0 rounded-full"
                            onClick={() => onClick(-10)}
                            disabled={goal <= 200}
                        >
                            <MinusIcon className="h-4 w-4" />
                            <span className="sr-only">Decrease</span>
                        </Button>
                        <div className="flex-1 text-center">
                            <div className="text-7xl font-bold tracking-tighter">
                                {goal}
                            </div>
                            <div className="text-[0.70rem] uppercase text-muted-foreground">
                                Тысяч/месяц
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 shrink-0 rounded-full"
                            onClick={() => onClick(10)}
                            disabled={goal >= 400}
                        >
                            <PlusIcon className="h-4 w-4" />
                            <span className="sr-only">Increase</span>
                        </Button>
                    </div>
                    {/* <div className="mt-3 h-[120px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <Bar
                                    dataKey="goal"
                                    style={
                                        {
                                            fill: "hsl(var(--foreground))",
                                            opacity: 0.9,
                                        }
                                    }
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div> */}
                </div>
            </CardContent>
            <CardFooter>
                <Button>Submit</Button>
            </CardFooter>
        </Card>
    );
};

export default SalaryCard;