ALTER TABLE "tasks" ALTER COLUMN "status" SET DEFAULT false;--> statement-breakpoint
ALTER TABLE "tasks" ALTER COLUMN "status" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "tasks" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "tasks" DROP COLUMN "cretedAt";--> statement-breakpoint
ALTER TABLE "tasks" DROP COLUMN "updatedAt";