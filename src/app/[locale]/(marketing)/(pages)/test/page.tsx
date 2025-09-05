import Container from '@/components/layout/container';

export default async function TestPage() {
  return (
    <Container className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Test Page</h1>
          <p className="text-muted-foreground mt-4">
            Credits and authentication test components removed - modules deleted
          </p>
        </div>
      </div>
    </Container>
  );
}
