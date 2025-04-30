import { NextResponse } from 'next/server';
import { writeFile, readdir, unlink } from 'fs/promises';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

// Ensure templates directory exists
const templatesDir = join(process.cwd(), 'public', 'templates');
if (!existsSync(templatesDir)) {
  mkdirSync(templatesDir, { recursive: true });
}

// Get all templates
export async function GET() {
  try {
    const files = await readdir(templatesDir);
    const templates = await Promise.all(
      files.map(async (filename) => {
        const [id, name, ...rest] = filename.split('-');
        const description = rest.join('-').replace('.xlsx', '');
        return {
          id,
          title: name.replace(/-/g, ' '),
          description,
          category: 'Uploaded',
          downloadUrl: `/templates/${filename}`,
          icon: '📄'
        };
      })
    );
    return NextResponse.json(templates);
  } catch (error) {
    console.error('Error fetching templates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
      { status: 500 }
    );
  }
}

// Upload new template
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    if (!file || !title) {
      return NextResponse.json(
        { error: 'File and title are required' },
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
    const filename = `${timestamp}-${title.toLowerCase().replace(/\s+/g, '-')}-${description?.toLowerCase().replace(/\s+/g, '-') || 'template'}.xlsx`;
    const filepath = join(templatesDir, filename);

    // Convert File to Buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);

    return NextResponse.json({
      id: timestamp.toString(),
      title,
      description,
      category: 'Uploaded',
      downloadUrl: `/templates/${filename}`,
      icon: '📄'
    });
  } catch (error) {
    console.error('Error uploading template:', error);
    return NextResponse.json(
      { error: 'Failed to upload template' },
      { status: 500 }
    );
  }
}

// Delete template
export async function DELETE(request: Request) {
  try {
    const { filename } = await request.json();
    const filepath = join(templatesDir, filename);
    
    if (existsSync(filepath)) {
      await unlink(filepath);
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json(
      { error: 'File not found' },
      { status: 404 }
    );
  } catch (error) {
    console.error('Error deleting template:', error);
    return NextResponse.json(
      { error: 'Failed to delete template' },
      { status: 500 }
    );
  }
} 