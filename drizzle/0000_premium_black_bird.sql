CREATE TABLE "tasks" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "tasks_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"task" text NOT NULL,
	"status" boolean NOT NULL,
	"cretedAt" timestamp NOT NULL,
	"updatedAt" date
);
