export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  conferati: {
    Tables: {
      filtertypes_st: {
        Row: {
          created_at: string | null
          id: number
          type: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          type: string
        }
        Update: {
          created_at?: string | null
          id?: number
          type?: string
        }
        Relationships: []
      }
      organization: {
        Row: {
          created_at: string
          id: number
          name: string
          type: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          type: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_type_fkey"
            columns: ["type"]
            referencedRelation: "filtertypes_st"
            referencedColumns: ["type"]
          }
        ]
      }
      organization_role: {
        Row: {
          created_at: string
          end_date: string | null
          id: number
          organization: number
          person: number
          start_date: string | null
          title: string
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: number
          organization: number
          person: number
          start_date?: string | null
          title: string
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: number
          organization?: number
          person?: number
          start_date?: string | null
          title?: string
        }
        Relationships: []
      }
      person: {
        Row: {
          birthdate: string | null
          created_at: string
          first_name: string
          id: number
          last_name: string
          local_image_url: string | null
          wikipedia_page: string | null
        }
        Insert: {
          birthdate?: string | null
          created_at?: string
          first_name: string
          id?: number
          last_name: string
          local_image_url?: string | null
          wikipedia_page?: string | null
        }
        Update: {
          birthdate?: string | null
          created_at?: string
          first_name?: string
          id?: number
          last_name?: string
          local_image_url?: string | null
          wikipedia_page?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
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
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "module_section_joining_table_fkey"
            columns: ["joining_table"]
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "module_section_module_section_data_fkey"
            columns: ["module_section_data"]
            referencedRelation: "module_section_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_section_page_module_fkey"
            columns: ["page_module"]
            referencedRelation: "page_module"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_section_record_table_fkey"
            columns: ["record_table"]
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "module_section_second_parent_table_fkey"
            columns: ["second_parent_table"]
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
            referencedRelation: "app"
            referencedColumns: ["url_name"]
          },
          {
            foreignKeyName: "page_record_record_name_fkey"
            columns: ["record_name"]
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
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "record_section_page_record_fkey"
            columns: ["page_record"]
            referencedRelation: "page_record"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "record_section_record_section_data_fkey"
            columns: ["record_section_data"]
            referencedRelation: "record_section_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "record_section_second_parent_table_fkey"
            columns: ["second_parent_table"]
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
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
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

