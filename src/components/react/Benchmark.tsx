import { useEffect, useState } from "react";
import { FlameGraph } from "react-flame-graph";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prismStyle from "react-syntax-highlighter/dist/esm/styles/prism/darcula";

const padding = 32;

export function Benchmark() {
    const [delay, setDelay] = useState(5);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth - padding);
    useEffect(() => {
        function onWindowResize() {
            setScreenWidth(window.innerWidth - padding);
        }
        window.addEventListener("resize", onWindowResize);

        return () => {
            window.removeEventListener("resize", onWindowResize);
        };
    });

    const codeBlock = `public class HelloWorld {
    private static void verySlowFunction() {
        Thread.sleep(${delay});
    }

    public static void main(String[] args) {
        System.out.println("start");
        HelloWorld.verySlowFunction();
        System.out.println("end");
    }
}`;

    const data = {
        name: "HelloWorld::main",
        value: 2 + delay,
        children: [
            {
                name: "System::out::println",
                value: 1,
            },
            {
                name: "HelloWorld::verySlowFunction",
                value: delay,
                children: [
                    {
                        name: "Thread::sleep",
                        value: delay,
                    },
                ],
            },
            {
                name: "System::out::println",
                value: 1,
            },
        ],
    };

    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full flex-col-reverse md:flex-row">
                <SyntaxHighlighter language="java" style={prismStyle} showLineNumbers>
                    {codeBlock}
                </SyntaxHighlighter>
                <label className="md:pt-20">
                    {"Delay value: "}
                    <input
                        type="range"
                        min={4}
                        max={32}
                        value={delay}
                        onChange={(ev) => {
                            setDelay(Number(ev.target.value));
                        }}
                    />
                </label>
            </div>
            <FlameGraph
                data={data}
                height={200}
                width={screenWidth}
                onChange={(node: any) => {
                    console.log(`"${node.name}" focused`);
                }}
            />
        </div>
    );
}
