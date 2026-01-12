"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { User, Mail, MessageSquare, Loader2 } from "lucide-react";

import { useModalStore } from "@/stores/modalStore";
import confetti from "canvas-confetti";
import { toast } from "@/hooks/use-toast";
import { Description } from "@radix-ui/react-dialog";

export default function ContactFormModal() {
  const { isOpen, closeModal } = useModalStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", formData.message);
    payload.append("_subject", "New Contact Form Submission");
    payload.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/ajax/amanullahshams.dev@gmail.com", {
        method: "POST",
        body: payload,
      });

      // Force 2s wait to show button animation even if response is fast
      setTimeout(() => {
        toast({
          title: "Message received!",
          description: "I'll reach out to you very soon.",
        });

        triggerConfetti();
        closeModal();
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      }, 2000);
    } catch (err) {
      console.error("Submission failed", err);
      toast({
        variant: "destructive",
        title: "Something went wrong. Try again later.",
      });
      setLoading(false);
    }
  };

  const triggerConfetti = () => {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
    };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      confetti({
        ...defaults,
        particleCount: 40,
        origin: {
          x: randomInRange(0.2, 0.8),
          y: Math.random() - 0.2,
        },
      });
    }, 250);
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-sm rounded-xl shadow-xl p-4">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-xl font-bold text-left">
            Contact Me
          </DialogTitle>
          <Description className="text-xs text-muted-foreground">
            I'm usually quick to respond.
          </Description>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="pl-8 pr-3 py-2 w-full text-sm h-8"
            />
            <User
              className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={14}
            />
          </div>

          <div className="relative">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="pl-8 pr-3 py-2 w-full text-sm h-8"
            />
            <Mail
              className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={14}
            />
          </div>

          <div className="relative">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={3}
              required
              className="pl-8 pr-3 py-2 w-full text-sm resize-none"
            />
            <MessageSquare
              className="absolute left-2.5 top-2.5 text-muted-foreground"
              size={14}
            />
          </div>

          <div className="flex justify-between gap-2 pt-2">
            <DialogClose asChild>
              <Button variant="outline" size="sm" disabled={loading}>
                Close
              </Button>
            </DialogClose>

            <Button type="submit" size="sm" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-1.5 h-3 w-3" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
