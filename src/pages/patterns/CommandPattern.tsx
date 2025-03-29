
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Code } from 'lucide-react';

const CommandPattern = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/patterns" className="text-sm text-lld-purple hover:text-lld-darkPurple flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Patterns</span>
          </Link>
        </div>

        <div className="mb-10">
          <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2">Advanced</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2 ml-2">Behavioral Pattern</span>
          <h1 className="text-4xl font-bold mb-4">Command Pattern</h1>
          <p className="text-xl text-gray-700 mb-6">
            The Command pattern turns a request into a stand-alone object containing all information about the request. This transformation allows you to parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="mb-4">
            Imagine you're working on a text editor application with buttons for operations like copy, paste, undo, etc. You need to connect these UI elements to the business logic that actually performs these operations.
          </p>
          <p className="mb-4">
            You could put the operation logic into the button click handlers, but this would mean:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Duplication of code if the same operation is triggered from different places (like a button click and a keyboard shortcut).</li>
            <li>The UI layer becoming tightly coupled with the business logic.</li>
            <li>Difficulty implementing features like undoing operations or command history.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="mb-4">
            The Command pattern suggests encapsulating a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6">
            <h3 className="font-medium mb-2 text-gray-800">TypeScript Implementation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
              <code>{`// Command interface
interface Command {
  execute(): void;
  undo(): void;
}

// Receiver class
class TextEditor {
  private text: string = '';

  getText(): string {
    return this.text;
  }

  insertText(text: string): void {
    this.text += text;
    console.log(\`Text inserted. Current text: "\${this.text}"\`);
  }

  deleteText(length: number): string {
    const deletedText = this.text.slice(-length);
    this.text = this.text.slice(0, -length);
    console.log(\`Text deleted. Current text: "\${this.text}"\`);
    return deletedText;
  }

  replaceText(startIndex: number, endIndex: number, text: string): string {
    const replacedText = this.text.slice(startIndex, endIndex);
    this.text = this.text.slice(0, startIndex) + text + this.text.slice(endIndex);
    console.log(\`Text replaced. Current text: "\${this.text}"\`);
    return replacedText;
  }
}

// Concrete Command - InsertTextCommand
class InsertTextCommand implements Command {
  private editor: TextEditor;
  private text: string;

  constructor(editor: TextEditor, text: string) {
    this.editor = editor;
    this.text = text;
  }

  execute(): void {
    this.editor.insertText(this.text);
  }

  undo(): void {
    this.editor.deleteText(this.text.length);
  }
}

// Concrete Command - DeleteTextCommand
class DeleteTextCommand implements Command {
  private editor: TextEditor;
  private length: number;
  private deletedText: string = '';

  constructor(editor: TextEditor, length: number) {
    this.editor = editor;
    this.length = length;
  }

  execute(): void {
    this.deletedText = this.editor.deleteText(this.length);
  }

  undo(): void {
    this.editor.insertText(this.deletedText);
  }
}

// Concrete Command - ReplaceTextCommand
class ReplaceTextCommand implements Command {
  private editor: TextEditor;
  private startIndex: number;
  private endIndex: number;
  private newText: string;
  private replacedText: string = '';

  constructor(editor: TextEditor, startIndex: number, endIndex: number, newText: string) {
    this.editor = editor;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.newText = newText;
  }

  execute(): void {
    this.replacedText = this.editor.replaceText(this.startIndex, this.endIndex, this.newText);
  }

  undo(): void {
    this.editor.replaceText(this.startIndex, this.startIndex + this.newText.length, this.replacedText);
  }
}

// Invoker - CommandHistory
class CommandHistory {
  private history: Command[] = [];
  private position: number = -1;

  push(command: Command): void {
    // Remove any commands after the current position
    if (this.position < this.history.length - 1) {
      this.history = this.history.slice(0, this.position + 1);
    }
    
    // Add the command and execute it
    this.history.push(command);
    this.position++;
    command.execute();
  }

  undo(): void {
    if (this.position >= 0) {
      const command = this.history[this.position];
      command.undo();
      this.position--;
    } else {
      console.log('Nothing to undo');
    }
  }

  redo(): void {
    if (this.position < this.history.length - 1) {
      this.position++;
      const command = this.history[this.position];
      command.execute();
    } else {
      console.log('Nothing to redo');
    }
  }
}

// Client code
function clientCode() {
  const editor = new TextEditor();
  const history = new CommandHistory();

  // User inserts some text
  history.push(new InsertTextCommand(editor, 'Hello, '));
  
  // User inserts more text
  history.push(new InsertTextCommand(editor, 'world!'));
  
  // User replaces some text
  history.push(new ReplaceTextCommand(editor, 7, 12, 'TypeScript'));
  
  console.log(\`Current text: "\${editor.getText()}"\`);  // "Hello, TypeScript!"
  
  // User undoes the last command
  console.log('Undoing the last command...');
  history.undo();
  console.log(\`Current text: "\${editor.getText()}"\`);  // "Hello, world!"
  
  // User undoes another command
  console.log('Undoing another command...');
  history.undo();
  console.log(\`Current text: "\${editor.getText()}"\`);  // "Hello, "
  
  // User redoes a command
  console.log('Redoing a command...');
  history.redo();
  console.log(\`Current text: "\${editor.getText()}"\`);  // "Hello, world!"
  
  // User adds new text, which clears the redo stack
  console.log('Adding new text...');
  history.push(new InsertTextCommand(editor, ' Welcome!'));
  console.log(\`Current text: "\${editor.getText()}"\`);  // "Hello, world! Welcome!"
  
  // Attempting to redo now won't work
  console.log('Attempting to redo...');
  history.redo();  // "Nothing to redo"
}

clientCode();`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">When to Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>When you want to parameterize objects with operations.</li>
            <li>When you want to queue operations, schedule their execution, or execute them remotely.</li>
            <li>When you need to implement reversible operations or a transaction system (with rollback capabilities).</li>
            <li>When you want to keep a history of requests.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-green-700">Pros</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Single Responsibility Principle: You can decouple classes that invoke operations from classes that perform these operations.</li>
                <li>Open/Closed Principle: You can introduce new commands into the app without breaking existing client code.</li>
                <li>You can implement undo/redo functionality.</li>
                <li>You can implement deferred execution of operations.</li>
                <li>You can assemble a set of simple commands into a complex one.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-red-700">Cons</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The code may become more complicated since you're introducing a whole new layer between senders and receivers.</li>
                <li>Some commands might require a lot of boilerplate code, making the pattern seem overly verbose for simple operations.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild className="flex items-center">
            <Link to="/patterns/strategy">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Strategy Pattern
            </Link>
          </Button>
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple flex items-center">
            <Link to="/patterns">
              Back to All Patterns
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommandPattern;