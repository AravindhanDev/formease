-- CreateTable
CREATE TABLE `Researchers` (
    `id` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` TEXT NOT NULL,

    UNIQUE INDEX `Researchers_id_key`(`id`),
    UNIQUE INDEX `Researchers_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Surveys` (
    `id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `researcherId` VARCHAR(255) NULL,

    UNIQUE INDEX `Surveys_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Questionarries` (
    `id` VARCHAR(255) NOT NULL,
    `question` VARCHAR(255) NOT NULL,
    `questionNumber` INTEGER NOT NULL,
    `surveyId` VARCHAR(255) NULL,

    UNIQUE INDEX `Questionarries_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Responses` (
    `id` VARCHAR(255) NOT NULL,
    `answer` TEXT NOT NULL,
    `questionId` VARCHAR(255) NULL,

    UNIQUE INDEX `Responses_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Surveys` ADD CONSTRAINT `Surveys_researcherId_fkey` FOREIGN KEY (`researcherId`) REFERENCES `Researchers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Questionarries` ADD CONSTRAINT `Questionarries_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `Surveys`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Responses` ADD CONSTRAINT `Responses_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Questionarries`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
