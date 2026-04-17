import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";

const REPORTS: Record<string, { title: string; subtitle: string; file: string; gradient: string }> = {
  psychometric: {
    title: "Psychometric Assessment — Sample Report",
    subtitle: "Personality, behavior & decision pattern analysis",
    file: "/reports/psychometric-sample.pdf",
    gradient: "from-purple-500 to-violet-600",
  },
  "brain-mapping": {
    title: "Brain Mapping — Sample Report",
    subtitle: "Cognitive ability, learning style & intelligence mapping",
    file: "/reports/brain-mapping-sample.pdf",
    gradient: "from-blue-500 to-cyan-500",
  },
  "performance-intelligence": {
    title: "Performance Intelligence — Sample Report",
    subtitle: "Strengths, weaknesses & growth potential evaluation",
    file: "/reports/performance-intelligence-sample.pdf",
    gradient: "from-indigo-500 to-blue-600",
  },
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reportKey: keyof typeof REPORTS | null;
}

export default function SampleReportDialog({ open, onOpenChange, reportKey }: Props) {
  const report = reportKey ? REPORTS[reportKey] : null;
  if (!report) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card rounded-2xl max-w-5xl w-[95vw] h-[90vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="p-5 pb-4 border-b border-border/50 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${report.gradient} flex items-center justify-center shadow-lg`}>
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <DialogTitle className="text-lg font-bold truncate">{report.title}</DialogTitle>
                <DialogDescription className="text-xs mt-0.5 truncate">{report.subtitle}</DialogDescription>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button variant="hero-outline" size="sm" asChild>
                <a href={report.file} download>
                  <Download className="w-4 h-4" /> Download
                </a>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <a href={report.file} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" /> Open
                </a>
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 bg-muted/30 overflow-hidden">
          <iframe
            src={`${report.file}#toolbar=1&view=FitH`}
            title={report.title}
            className="w-full h-full border-0"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export type ReportKey = keyof typeof REPORTS;
