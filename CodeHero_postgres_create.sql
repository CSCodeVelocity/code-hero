CREATE TABLE "Users" (
	"id" serial NOT NULL,
	"username" varchar(20) NOT NULL UNIQUE,
	"password" varchar(20) NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Games" (
	"id" serial NOT NULL,
	"code_block_id" serial NOT NULL,
	"winner_id" serial NOT NULL,
	CONSTRAINT "Games_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "CodeBlocks" (
	"id" serial NOT NULL,
	"text" varchar NOT NULL,
	CONSTRAINT "CodeBlocks_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Users_Games" (
	"id" serial NOT NULL,
	"game_id" int NOT NULL,
	"user_id" int NOT NULL,
	"time" int NOT NULL,
	CONSTRAINT "Users_Games_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Games" ADD CONSTRAINT "Games_fk0" FOREIGN KEY ("code_block_id") REFERENCES "CodeBlocks"("id");
ALTER TABLE "Games" ADD CONSTRAINT "Games_fk1" FOREIGN KEY ("winner_id") REFERENCES "Users"("id");


ALTER TABLE "Users_Games" ADD CONSTRAINT "Users_Games_fk0" FOREIGN KEY ("game_id") REFERENCES "Games"("id");
ALTER TABLE "Users_Games" ADD CONSTRAINT "Users_Games_fk1" FOREIGN KEY ("user_id") REFERENCES "Users"("id");

