CREATE TYPE "public"."status" AS ENUM('PENDING', 'COMPLETE', 'OVERDUE');--> statement-breakpoint
CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"status" "status" DEFAULT 'PENDING' NOT NULL,
	"priority" integer DEFAULT 1 NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"completed_at" timestamp,
	"due_at" timestamp
);
