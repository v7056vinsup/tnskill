"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import Table from "@/components/ui/table";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Dropdown from "@/components/ui/dropdown";
import Input from "@/components/ui/input";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Modal from "@/components/ui/modal";
import Toast from "@/components/ui/toast";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-8">
      <h2 className="mb-6 border-b border-zinc-200 pb-3 text-2xl font-bold text-zinc-900 dark:border-zinc-800 dark:text-zinc-50">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Example({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {title}
      </h3>
      <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
        {children}
      </div>
    </div>
  );
}

const tableColumns = [
  { header: "Name", accessor: "name" as const },
  { header: "Role", accessor: "role" as const },
  { header: "Status", accessor: "status" as const },
];

const tableData = [
  { name: "Alice Johnson", role: "Admin", status: "Active" },
  { name: "Bob Smith", role: "Editor", status: "Inactive" },
  { name: "Carol White", role: "Viewer", status: "Active" },
];

export default function UIComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [toasts, setToasts] = useState<{ id: number; variant: "success" | "error" | "warning" | "info" }[]>([]);

  const addToast = (variant: "success" | "error" | "warning" | "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, variant }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="flex-1 overflow-y-auto px-6 py-10 lg:px-12">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        UI Components
      </h1>
      <p className="mb-12 text-zinc-500 dark:text-zinc-400">
        All reusable components available in this project with examples and usage.
      </p>

      {/* Button */}
      <Section id="button" title="Button">
        <Example title="Variants">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </Example>
        <Example title="Sizes">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Example>
        <Example title="States">
          <div className="flex flex-wrap gap-3">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Example>
      </Section>

      {/* Loader */}
      <Section id="loader" title="Loader">
        <Example title="Sizes">
          <div className="flex items-center gap-8">
            <Loader size="sm" />
            <Loader size="md" />
            <Loader size="lg" />
          </div>
        </Example>
      </Section>

      {/* Table */}
      <Section id="table" title="Table">
        <Example title="Basic Table">
          <Table columns={tableColumns} data={tableData} />
        </Example>
        <Example title="Empty State">
          <Table columns={tableColumns} data={[]} />
        </Example>
      </Section>

      {/* Breadcrumbs */}
      <Section id="breadcrumbs" title="Breadcrumbs">
        <Example title="Default">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Docs", href: "/docs" },
              { label: "UI Components" },
            ]}
          />
        </Example>
      </Section>

      {/* Dropdown */}
      <Section id="dropdown" title="Dropdown">
        <Example title="Basic">
          <div className="flex gap-4">
            <Dropdown
              align="left"
              trigger={
                <Button variant="outline">
                  Actions ▾
                </Button>
              }
              items={[
                { label: "Edit", onClick: () => {} },
                { label: "Duplicate", onClick: () => {} },
                { label: "Delete", onClick: () => {}, danger: true },
              ]}
            />
            <Dropdown
              align="right"
              trigger={
                <Button variant="secondary">
                  Right Align ▾
                </Button>
              }
              items={[
                { label: "Profile", onClick: () => {} },
                { label: "Settings", onClick: () => {} },
                { label: "Logout", onClick: () => {}, danger: true },
              ]}
            />
          </div>
        </Example>
      </Section>

      {/* Input */}
      <Section id="input" title="Input">
        <Example title="Variants">
          <div className="grid max-w-md gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
            />
            <Input
              label="With Error"
              error="This field is required"
              placeholder="Required field"
            />
            <Input
              label="With Hint"
              hint="Must be at least 8 characters"
              placeholder="Password"
            />
            <Input
              label="Disabled"
              disabled
              placeholder="Cannot edit"
            />
          </div>
        </Example>
      </Section>

      {/* Card */}
      <Section id="card" title="Card">
        <Example title="Basic Card">
          <div className="grid max-w-lg gap-4">
            <Card title="Card Title" description="A brief description of the card content.">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                This is the card body content. You can place any components here.
              </p>
            </Card>
            <Card
              title="Card with Footer"
              footer={
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">Cancel</Button>
                  <Button size="sm">Save</Button>
                </div>
              }
            >
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Cards can include a footer section with actions.
              </p>
            </Card>
          </div>
        </Example>
      </Section>

      {/* Badge */}
      <Section id="badge" title="Badge">
        <Example title="Variants">
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </Example>
      </Section>

      {/* Modal */}
      <Section id="modal" title="Modal">
        <Example title="Basic Modal">
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Confirm Action"
            footer={
              <>
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setModalOpen(false)}>Confirm</Button>
              </>
            }
          >
            <p>Are you sure you want to proceed? This action cannot be undone.</p>
          </Modal>
        </Example>
      </Section>

      {/* Toast */}
      <Section id="toast" title="Toast">
        <Example title="Variants">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="sm" onClick={() => addToast("success")}>
              Success
            </Button>
            <Button variant="danger" size="sm" onClick={() => addToast("error")}>
              Error
            </Button>
            <Button variant="secondary" size="sm" onClick={() => addToast("warning")}>
              Warning
            </Button>
            <Button variant="outline" size="sm" onClick={() => addToast("info")}>
              Info
            </Button>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {toasts.map((t) => (
              <Toast
                key={t.id}
                variant={t.variant}
                title={t.variant.charAt(0).toUpperCase() + t.variant.slice(1)}
                onClose={() => removeToast(t.id)}
              >
                This is a {t.variant} toast notification.
              </Toast>
            ))}
          </div>
        </Example>
      </Section>
    </div>
  );
}
