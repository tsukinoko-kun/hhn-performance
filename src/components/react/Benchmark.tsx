import { useEffect, useState } from "react";
import { FlameGraph } from "react-flame-graph";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prismStyle from "react-syntax-highlighter/dist/esm/styles/prism/darcula";

const padding = 32;

export function Benchmark() {
    const [delay, setDelay] = useState(500);
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

    const codeBlock = `public class Main {
    private static void verySlowFunction() {
        long target = System.currentTimeMillis() + ${delay};
        while (target > System.currentTimeMillis()) {
        }
    }

    public static void main(String[] args) {
        System.out.println("start");
        Main.verySlowFunction();
        System.out.println("end");
    }
}`;

    const data = {
        name: "all",
        value: 112 + delay,
        children: [
            {
                name: "Main.main",
                value: delay,
                children: [
                    {
                        name: "Main.verySlowFunction()",
                        value: delay,
                    },
                ],
            },
            {
                name: "jdk.internal.agent.Agent.startLocalManagementAgent()",
                value: 72,
                children: [
                    {
                        name: "sun.management.jmxremote.ConnectionBootstrap.startLocalConnectionServer()",
                        value: 72,
                        children: [
                            {
                                name: "java.lang.management.ManagementFactory.getPlatformMBeanServer()",
                                value: 40,
                                children: [
                                    {
                                        name: "java.util.stream.ReferencePipeline.forEach(Consumer)",
                                        value: 32,
                                        children: [
                                            {
                                                name: "java.lang.management.ManagementFactory$$Lambda.0x000000f001083bc8.apply(Object)",
                                                value: 16,
                                                children: [
                                                    {
                                                        name: "java.lang.management.ManagementFactory.lambda$getPlatformMBeanServer$0(PlatformMBeanProvider$PlatformComponent)",
                                                        value: 16,
                                                        children: [
                                                            {
                                                                name: "jdk.management.jfr.internal.FlightRecorderMXBeanProvider$SingleMBeanComponent.nameToMBeanMap()",
                                                                value: 8,
                                                            },
                                                            {
                                                                name: "java.lang.management.DefaultPlatformMBeanProvider$5.nameToMBeanMap()",
                                                                value: 8,
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                            {
                                                name: "java.util.stream.ReferencePipeline$Head.forEach(Consumer)",
                                                value: 16,
                                                children: [
                                                    {
                                                        name: "com.sun.jmx.mbeanserver.JmxMBeanServer.registerMBean(Object, ObjectName)",
                                                        value: 8,
                                                    },
                                                    {
                                                        name: "javax.management.StandardMBean.<init>(Object, Class, boolean)",
                                                        value: 8,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        name: "javax.management.MBeanServerFactory.createMBeanServer()",
                                        value: 8,
                                    },
                                ],
                            },
                            {
                                name: "javax.management.remote.rmi.RMIConnectorServer.start()",
                                value: 32,
                            },
                        ],
                    },
                ],
            },
            {
                name: "java.lang.Thread.run()",
                value: 32,
                children: [
                    {
                        name: "java.lang.Thread.runWith(Object, Runnable)",
                        value: 32,
                        children: [
                            {
                                name: "java.util.concurrent.ThreadPoolExecutor$Worker.run()",
                                value: 16,
                            },
                            {
                                name: "com.sun.jmx.remote.internal.ServerCommunicatorAdmin$Timeout.run()",
                                value: 8,
                            },
                            {
                                name: "jdk.jfr.internal.ShutdownHook.run()",
                                value: 8,
                            },
                        ],
                    },
                ],
            },
            {
                name: "jdk.internal.vm.VMSupport.serializeAgentPropertiesToByteArray()",
                value: 8,
            },
        ],
    };

    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full flex-col-reverse md:flex-row">
                <SyntaxHighlighter language="java" style={prismStyle} showLineNumbers>
                    {codeBlock}
                </SyntaxHighlighter>
                <label className="md:pt-16">
                    {"Delay value: "}
                    <input
                        type="range"
                        min={1000}
                        max={2950}
                        step={50}
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
