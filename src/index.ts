#!/usr/bin/env bun

/**
 * FLISoL 2026 CLI Tool
 * A simple CLI tool to demonstrate Bun binary builds
 */

export function greet(name: string): string {
	return `¡Hola ${name}! Bienvenido a FLISoL 2026 🚀`;
}

export function farewell(name: string): string {
	return `¡Adiós ${name}! Nos vemos en FLISoL 2026 👋`;
}

export function calculate(
	a: number,
	b: number,
	operation: "add" | "subtract" | "multiply" | "divide",
): number {
	switch (operation) {
		case "add":
			return a + b;
		case "subtract":
			return a - b;
		case "multiply":
			return a * b;
		case "divide":
			if (b === 0) throw new Error("Cannot divide by zero");
			return a / b;
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}

// CLI interface
const command = Bun.argv[2];

switch (command) {
	case "greet": {
		const name = Bun.argv[3] || "Mundo";
		console.log(greet(name));
		break;
	}
	case "farewell": {
		const name = Bun.argv[3] || "Mundo";
		console.log(farewell(name));
		break;
	}
	case "calculate": {
		const a = parseFloat(Bun.argv[3] || "0");
		const b = parseFloat(Bun.argv[4] || "0");
		const op = (Bun.argv[5] || "add") as
			| "add"
			| "subtract"
			| "multiply"
			| "divide";
		try {
			const result = calculate(a, b, op);
			console.log(
				`Result: ${a} ${op === "add" ? "+" : op === "subtract" ? "-" : op === "multiply" ? "*" : "/"} ${b} = ${result}`,
			);
		} catch (e) {
			console.error(`Error: ${(e as Error).message}`);
			process.exit(1);
		}
		break;
	}
	case "version":
		console.log("flisol-cli v1.0.0");
		break;
	default:
		console.log(
			`
FLISoL CLI Tool v1.0.0

Usage:
  flisol greet [name]     - Saluda a alguien
  flisol farewell [name]  - Se despide de alguien
  flisol calculate <a> <b> [op] - Calcula operaciones
  flisol version          - Muestra la versión

Operations: add, subtract, multiply, divide (default: add)
    `.trim(),
		);
}
