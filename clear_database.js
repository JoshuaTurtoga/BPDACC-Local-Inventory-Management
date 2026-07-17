import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Starting database cleanup...');
  console.log('============================');

  try {
    // Temporarily disable foreign key checks so we can wipe tables easily (MySQL)
    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 0;');

    await prisma.$executeRawUnsafe('TRUNCATE TABLE requisition_item_releases;');
    console.log('- Cleared Requisition Item Releases');

    await prisma.$executeRawUnsafe('TRUNCATE TABLE requisition_items;');
    console.log('- Cleared Requisition Items');

    await prisma.$executeRawUnsafe('TRUNCATE TABLE requisitions;');
    console.log('- Cleared Requisitions');

    await prisma.$executeRawUnsafe('TRUNCATE TABLE inventory_transactions;');
    console.log('- Cleared Inventory Transactions');

    await prisma.$executeRawUnsafe('TRUNCATE TABLE inventory_batches;');
    console.log('- Cleared Inventory Batches');

    await prisma.$executeRawUnsafe('TRUNCATE TABLE inventory_items;');
    console.log('- Cleared Inventory Items');

    await prisma.$executeRawUnsafe('TRUNCATE TABLE activities;');
    console.log('- Cleared Activity Logs');

    await prisma.$executeRawUnsafe('TRUNCATE TABLE ris_counters;');
    console.log('- Cleared RIS Counters');

    // 3. Delete Non-Super Admin Users
    // This safely keeps your Super Admin account (where is_admin is true)
    await prisma.$executeRawUnsafe(`DELETE FROM users WHERE is_admin = false;`);
    console.log(`- Cleared Non-Admin User Accounts`);

    // Re-enable foreign key checks
    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 1;');

    console.log('============================');
    console.log('✅ Database successfully cleared (Super Admin account retained).');

  } catch (error) {
    console.error('❌ Error clearing the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
