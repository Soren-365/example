export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      app: {
        Row: {
          admin: string | null
          created_at: string
          home_module_url_name: string | null
          id: number
          logo_url: string
          url_name: string
        }
        Insert: {
          admin?: string | null
          created_at?: string
          home_module_url_name?: string | null
          id?: number
          logo_url: string
          url_name: string
        }
        Update: {
          admin?: string | null
          created_at?: string
          home_module_url_name?: string | null
          id?: number
          logo_url?: string
          url_name?: string
        }
        Relationships: []
      }
      module_section: {
        Row: {
          app_filter_on_table: string | null
          created_at: string
          id: number
          joining_table: string | null
          module_section_data: number
          page_module: number
          record_table: string
          richtext: string | null
          second_parent_table: string | null
          title: string
          vertical_page_position: number | null
        }
        Insert: {
          app_filter_on_table?: string | null
          created_at?: string
          id?: number
          joining_table?: string | null
          module_section_data: number
          page_module: number
          record_table: string
          richtext?: string | null
          second_parent_table?: string | null
          title: string
          vertical_page_position?: number | null
        }
        Update: {
          app_filter_on_table?: string | null
          created_at?: string
          id?: number
          joining_table?: string | null
          module_section_data?: number
          page_module?: number
          record_table?: string
          richtext?: string | null
          second_parent_table?: string | null
          title?: string
          vertical_page_position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "module_section_app_filter_on_table_fkey"
            columns: ["app_filter_on_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "module_section_joining_table_fkey"
            columns: ["joining_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "module_section_module_section_data_fkey"
            columns: ["module_section_data"]
            isOneToOne: false
            referencedRelation: "module_section_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_section_page_module_fkey"
            columns: ["page_module"]
            isOneToOne: false
            referencedRelation: "page_module"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_section_record_table_fkey"
            columns: ["record_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "module_section_second_parent_table_fkey"
            columns: ["second_parent_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          }
        ]
      }
      module_section_data: {
        Row: {
          description: string | null
          get_section_data_sql: string
          id: number
        }
        Insert: {
          description?: string | null
          get_section_data_sql: string
          id?: number
        }
        Update: {
          description?: string | null
          get_section_data_sql?: string
          id?: number
        }
        Relationships: []
      }
      page_module: {
        Row: {
          app: string
          created_at: string
          id: number
          title: string | null
          url_name: string
        }
        Insert: {
          app: string
          created_at?: string
          id?: number
          title?: string | null
          url_name: string
        }
        Update: {
          app?: string
          created_at?: string
          id?: number
          title?: string | null
          url_name?: string
        }
        Relationships: []
      }
      page_record: {
        Row: {
          app: string
          created_at: string
          description: string | null
          id: number
          record_name: string
          title: string
        }
        Insert: {
          app: string
          created_at?: string
          description?: string | null
          id?: number
          record_name: string
          title: string
        }
        Update: {
          app?: string
          created_at?: string
          description?: string | null
          id?: number
          record_name?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_record_app_fkey"
            columns: ["app"]
            isOneToOne: false
            referencedRelation: "app"
            referencedColumns: ["url_name"]
          },
          {
            foreignKeyName: "page_record_record_name_fkey"
            columns: ["record_name"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          }
        ]
      }
      record_section: {
        Row: {
          createdAt: string
          id: number
          joining_table: string | null
          page_record: number
          record_section_data: number
          richtext: string | null
          second_parent_table: string | null
          title: string | null
          vertical_page_position: number | null
        }
        Insert: {
          createdAt?: string
          id?: number
          joining_table?: string | null
          page_record: number
          record_section_data: number
          richtext?: string | null
          second_parent_table?: string | null
          title?: string | null
          vertical_page_position?: number | null
        }
        Update: {
          createdAt?: string
          id?: number
          joining_table?: string | null
          page_record?: number
          record_section_data?: number
          richtext?: string | null
          second_parent_table?: string | null
          title?: string | null
          vertical_page_position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "record_section_joining_table_fkey"
            columns: ["joining_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "record_section_page_record_fkey"
            columns: ["page_record"]
            isOneToOne: false
            referencedRelation: "page_record"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "record_section_record_section_data_fkey"
            columns: ["record_section_data"]
            isOneToOne: false
            referencedRelation: "record_section_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "record_section_second_parent_table_fkey"
            columns: ["second_parent_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          }
        ]
      }
      record_section_data: {
        Row: {
          description: string
          get_section_data_sql: string
          id: number
        }
        Insert: {
          description: string
          get_section_data_sql: string
          id?: number
        }
        Update: {
          description?: string
          get_section_data_sql?: string
          id?: number
        }
        Relationships: []
      }
      record_table: {
        Row: {
          created_at: string
          data_jsonschema: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          data_jsonschema?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          data_jsonschema?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      record_table_column_labels: {
        Row: {
          column_name: string
          id: number
          is_external_link: boolean
          label_name: string
          record_table_id: number
        }
        Insert: {
          column_name: string
          id?: number
          is_external_link?: boolean
          label_name: string
          record_table_id: number
        }
        Update: {
          column_name?: string
          id?: number
          is_external_link?: boolean
          label_name?: string
          record_table_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "record_table_column_labels_record_table_id_fkey"
            columns: ["record_table_id"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_module_section_data_with_app_filter: {
        Args: {
          url_module: string
          url_app: string
        }
        Returns: {
          data: Json
        }[]
      }
      get_record_section_data_with_section_filter: {
        Args: {
          record_id: number
          record_table: string
          app_name: string
        }
        Returns: {
          data: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
