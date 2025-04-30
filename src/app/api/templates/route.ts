import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

// Ensure templates directory exists
const templatesDir = join(process.cwd(), 'public', 'templates');
if (!existsSync(templatesDir)) {
  mkdirSync(templatesDir, { recursive: true });
}

// Initial templates list
let templates = [
  {
    id: '1',
    name: 'Tax Planner',
    file: 'tax-planner.xlsx',
    description: 'Comprehensive tax planning template for individuals and businesses'
  },
  {
    id: '2',
    name: 'Expense Tracker',
    file: 'expense-tracker.xlsx',
    description: 'Track and categorize your expenses for better tax management'
  }
];

export async function GET() {
  try {
    return NextResponse.json(templates);
  } catch (error) {
    console.error('Error fetching templates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    if (!file || !name) {
      return NextResponse.json(
        { error: 'File and name are required' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.name.endsWith('.xlsx')) {
      return NextResponse.json(
        { error: 'Only Excel (.xlsx) files are allowed' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `${name.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.xlsx`;
    const filepath = join(templatesDir, filename);

    // Convert File to Buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);

    // Add to templates list
    const newTemplate = {
      id: (templates.length + 1).toString(),
      name,
      file: filename,
      description: description || ''
    };
    templates.push(newTemplate);

    return NextResponse.json(newTemplate);
  } catch (error) {
    console.error('Error uploading template:', error);
    return NextResponse.json(
      { error: 'Failed to upload template' },
      { status: 500 }
    );
  }
} 