import ResultsClient from "@/components/ResultsClient";

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ a?: string }>;
}) {
  const { a } = await searchParams;
  return <ResultsClient archetypeIndex={a} />;
}
