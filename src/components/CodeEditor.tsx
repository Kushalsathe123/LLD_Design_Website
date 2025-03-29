import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeEditorProps {
  initialCode: string;
  language: string;
  readOnly?: boolean;
  darkMode?: boolean;
  onRun?: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode,
  language,
  readOnly = false,
  darkMode = false,
  onRun
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const runCode = () => {
    setIsRunning(true);
    setOutput("Running code...");
    
    // In a real implementation, we would send this code to a backend service
    // For this demo, we'll just simulate execution
    setTimeout(() => {
      try {
        // For demonstration purposes only - DO NOT use eval in production!
        // This is just to simulate code execution for the UI
        if (language === "typescript" || language === "javascript") {
          // Safer alternative to actual evaluation for demo purposes
          const fakeOutput = `// Output for ${language}:\n// Code execution simulated for educational purposes\n`;
          const sampleOutputs = {
            "typescript": "[LOG]: Creating a new instance\n[LOG]: Method called successfully\n[LOG]: Operation completed",
            "javascript": "console.log() output would appear here\n> Example return value",
            "python": ">>> Running Python code\n>>> Operation completed successfully",
            "java": "Compiling Java code...\nExecution complete\nOutput: Operation successful",
            "csharp": "Compiling C# code...\nBuild successful\nProgram output: Operation completed"
          };
          
          setOutput(fakeOutput + (sampleOutputs[language as keyof typeof sampleOutputs] || "Code executed successfully"));
        } else {
          setOutput(`Code execution for ${language} is simulated.\nThis is an educational example to demonstrate how interactive code might work.`);
        }
      } catch (error) {
        setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        setIsRunning(false);
      }
    }, 1000);
  };

  return (
    <div className={cn(
      "rounded-lg border overflow-hidden",
      darkMode ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-200"
    )}>
      <div className={cn(
        "px-4 py-2 flex items-center justify-between border-b",
        darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"
      )}>
        <span className={cn(
          "text-sm font-medium",
          darkMode ? "text-gray-300" : "text-gray-700"
        )}>
          {language.charAt(0).toUpperCase() + language.slice(1)}
        </span>
        {!readOnly && (
          <Button 
            size="sm"
            onClick={runCode}
            disabled={isRunning}
            className={cn(
              "h-7 text-xs",
              darkMode ? "bg-gray-700 hover:bg-gray-600" : ""
            )}
          >
            <Play className="h-3 w-3 mr-1" />
            Run
          </Button>
        )}
      </div>
      
      <div className="flex flex-col lg:flex-row">
        <textarea
          value={code}
          onChange={handleCodeChange}
          readOnly={readOnly}
          className={cn(
            "font-mono text-sm p-4 resize-none min-h-[200px] w-full lg:w-1/2 outline-none",
            darkMode ? "bg-gray-900 text-gray-300 border-gray-700" : "bg-gray-50 text-gray-800",
            readOnly ? "cursor-default" : ""
          )}
          spellCheck="false"
        />
        
        {output !== null && (
          <div className={cn(
            "font-mono text-sm p-4 border-t lg:border-t-0 lg:border-l w-full lg:w-1/2 min-h-[100px]",
            darkMode ? "bg-gray-800 text-gray-300 border-gray-700" : "bg-white text-gray-800 border-gray-200"
          )}>
            <div className={cn(
              "text-xs mb-2",
              darkMode ? "text-gray-400" : "text-gray-500"
            )}>
              Output:
            </div>
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;