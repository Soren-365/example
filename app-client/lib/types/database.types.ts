export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
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
          createdAt: string
          id: number
          logo_url: string
          url_name: string
        }
        Insert: {
          admin?: string | null
          createdAt?: string
          id?: never
          logo_url: string
          url_name: string
        }
        Update: {
          admin?: string | null
          createdAt?: string
          id?: never
          logo_url?: string
          url_name?: string
        }
      }
      module_section: {
        Row: {
          createdAt: string
          id: number
          module_section_type: number
          page_module: string
          record_data: number | null
          record_filter: number | null
          record_type: number | null
          richtext: string | null
          sectiondata: Json
          title: string
          vertical_page_position: number | null
        }
        Insert: {
          createdAt?: string
          id?: never
          module_section_type: number
          page_module: string
          record_data?: number | null
          record_filter?: number | null
          record_type?: number | null
          richtext?: string | null
          sectiondata: Json
          title: string
          vertical_page_position?: number | null
        }
        Update: {
          createdAt?: string
          id?: never
          module_section_type?: number
          page_module?: string
          record_data?: number | null
          record_filter?: number | null
          record_type?: number | null
          richtext?: string | null
          sectiondata?: Json
          title?: string
          vertical_page_position?: number | null
        }
      }
      module_section_type: {
        Row: {
          createdAt: string
          id: number
          name: string
          record_type: number
          renderfunction: string
        }
        Insert: {
          createdAt?: string
          id?: never
          name: string
          record_type: number
          renderfunction: string
        }
        Update: {
          createdAt?: string
          id?: never
          name?: string
          record_type?: number
          renderfunction?: string
        }
      }
      note: {
        Row: {
          content: string
          createdat: string | null
          id: number
          title: string
        }
        Insert: {
          content: string
          createdat?: string | null
          id?: number
          title: string
        }
        Update: {
          content?: string
          createdat?: string | null
          id?: number
          title?: string
        }
      }
      page_module: {
        Row: {
          app: string
          createdAt: string
          id: number
          title: string
          url_name: string
        }
        Insert: {
          app: string
          createdAt?: string
          id?: never
          title: string
          url_name: string
        }
        Update: {
          app?: string
          createdAt?: string
          id?: never
          title?: string
          url_name?: string
        }
      }
      page_record: {
        Row: {
          app: string
          createdAt: string
          description: string | null
          id: number
          record_data: number
          record_filter: number
          record_type: number
          title: string
          url_name: string
        }
        Insert: {
          app: string
          createdAt?: string
          description?: string | null
          id?: never
          record_data: number
          record_filter: number
          record_type: number
          title: string
          url_name: string
        }
        Update: {
          app?: string
          createdAt?: string
          description?: string | null
          id?: never
          record_data?: number
          record_filter?: number
          record_type?: number
          title?: string
          url_name?: string
        }
      }
      page_record_record: {
        Row: {
          createdAt: string
          id: number
          linked_record: number
          page_record: number
        }
        Insert: {
          createdAt?: string
          id?: never
          linked_record: number
          page_record: number
        }
        Update: {
          createdAt?: string
          id?: never
          linked_record?: number
          page_record?: number
        }
      }
      record_data: {
        Row: {
          createdAt: string
          data: Json
          id: number
          record_type: number
        }
        Insert: {
          createdAt?: string
          data: Json
          id?: never
          record_type: number
        }
        Update: {
          createdAt?: string
          data?: Json
          id?: never
          record_type?: number
        }
      }
      record_filter: {
        Row: {
          app: number
          createdAt: string
          filter_record_jsonkeys: string[]
          id: number
          record_type: number
        }
        Insert: {
          app: number
          createdAt?: string
          filter_record_jsonkeys: string[]
          id?: never
          record_type: number
        }
        Update: {
          app?: number
          createdAt?: string
          filter_record_jsonkeys?: string[]
          id?: never
          record_type?: number
        }
      }
      record_section: {
        Row: {
          createdAt: string
          id: number
          page_record: number
          record_section_type: number
          sectiondata: Json | null
          title: string
          vertical_page_position: number
        }
        Insert: {
          createdAt?: string
          id?: never
          page_record: number
          record_section_type: number
          sectiondata?: Json | null
          title: string
          vertical_page_position: number
        }
        Update: {
          createdAt?: string
          id?: never
          page_record?: number
          record_section_type?: number
          sectiondata?: Json | null
          title?: string
          vertical_page_position?: number
        }
      }
      record_section_type: {
        Row: {
          createdAt: string
          id: number
          name: string
          record_type: number
          renderfunction: string
        }
        Insert: {
          createdAt?: string
          id?: never
          name: string
          record_type: number
          renderfunction: string
        }
        Update: {
          createdAt?: string
          id?: never
          name?: string
          record_type?: number
          renderfunction?: string
        }
      }
      record_type: {
        Row: {
          createdAt: string
          data_jsonschema: string
          id: number
          name: string
        }
        Insert: {
          createdAt?: string
          data_jsonschema: string
          id?: never
          name: string
        }
        Update: {
          createdAt?: string
          data_jsonschema?: string
          id?: never
          name?: string
        }
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
          public?: boolean | null
          updated_at?: string | null
        }
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
          path_tokens: string[] | null
          updated_at: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
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
        Returns: string[]
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

